/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.hibernate.exception.ConstraintViolationException;
import org.hibernate.exception.GenericJDBCException;
import org.hibernate.exception.JDBCConnectionException;
import org.hibernate.exception.LockAcquisitionException;
import org.hibernate.exception.SQLGrammarException;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

/**
 *
 * @author Bruno
 * @param <T>
 * @param <ID>
 */
public class BaseMyRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T, ID> implements BaseMyRepository<T, ID> {

    @PersistenceContext(unitName = "persistenceSisInfoWeb")
    private EntityManager entityManager;

    public BaseMyRepositoryImpl(JpaEntityInformation entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.entityManager = entityManager;
    }

    @Override
    //@Transactional
    public List<T> findCustomNativeQuery(String sqlQuery) {
        try {
            return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO EXECUTAR O SELECT CUSTOMNATIVEQUERY. | " + e.getMessage());
            return null;
        } catch (Exception e) {
            logger.error("ERRO AO EXECUTAR O SELECT CUSTOMNATIVEQUERY. | " + e.getMessage());
            return null;
        }
    }

    @Override
    //@Transactional
    public T findOneByGuid(String guid) {
        try {
            String consultaJpql = "SELECT A FROM " + this.getDomainClass().getSimpleName().toUpperCase().replace("ENTITY", "").replace("CUSTOM", "") + " A WHERE A.GUID = :GUID";
            Query query = entityManager.createQuery(consultaJpql, this.getDomainClass());
            query.setParameter("GUID", guid);

            return (T) query.getSingleResult();
        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO EXECUTAR SELECT POR GUID. | " + e.getMessage());
            return null;
        } catch (Exception e) {
            logger.error("ERRO AO EXECUTAR SELECT POR GUID. | " + e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public Integer saveCustomNativeQuery(String sqlQuery) {
        try {
            Integer qtdInsert = entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return qtdInsert;

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO SALVAR DADOS. | " + e.getMessage());
            return -1;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return -1;
        }
    }

    @Override
    //@Transactional
    public EntityManager getConnectionClient(T smadispoEntity) {
        try {
            logger.info("PEGANDO OS DADOS DO BANCO DE DADOS QUE TEM OS DADOS DA EMPRESA LICENCIADA. Identificacao: " + ((SmadispoEntity) smadispoEntity).getIdentificacao());

            if ((entityManager == null) || (!entityManager.isOpen())
                    || ((entityManager.getProperties() != null) && (entityManager.getProperties().containsKey("hibernate.ejb.persistenceUnitName"))
                    && (!entityManager.getProperties().get("hibernate.ejb.persistenceUnitName").toString().equalsIgnoreCase("persistenceSisInfoWebClient")))) {
                
                String sqlSelect = "SELECT * FROM CFACLIFO "
                        + "WHERE CFACLIFO.ID_CFACLIFO = (SELECT SMADISPO.ID_CFACLIFO FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '" + ((SmadispoEntity) smadispoEntity).getIdentificacao() + "');";
                Query query = entityManager.createNativeQuery(sqlSelect, CfaclifoEntity.class);

                List<CfaclifoEntity> cfaclifoEntity = query.getResultList();

                // Checa se retornou alguma coisa do banco
                if ((cfaclifoEntity != null) && (cfaclifoEntity.size() > 0)) {
                    Map properties = new HashMap();
                    properties.put("hibernate.connection.driver_class", "org.firebirdsql.jdbc.FBDriver");
                    properties.put("hibernate.connection.url", "jdbc:firebirdsql:" + cfaclifoEntity.get(0).getIpServidorSisinfo() + "/" + cfaclifoEntity.get(0).getPortaBancoSisinfo() + ":" + cfaclifoEntity.get(0).getCaminhoBancoSisinfo() + "");
                    properties.put("hibernate.connection.username", cfaclifoEntity.get(0).getUsuSisinfoWebservice());
                    properties.put("hibernate.connection.password", cfaclifoEntity.get(0).getSenhaSisinfoWebservice());
                    properties.put("hibernate.dialect", "org.hibernate.dialect.FirebirdDialect");
                    properties.put("hibernate.show-sql", "false");
                    properties.put("hibernate.temp.use_jdbc_metadata_defaults", "false");
                    properties.put("hibernate.ejb.entitymanager_factory_name", "persistenceSisInfoWebClient");

                    EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistenceSisInfoWebClient", properties);
                    entityManager = (EntityManager) emf.createEntityManager();
                }
            }
            return entityManager;
        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("Erro ao pegar os dados da conecxão com o banco de dados. | " + e.getMessage());
            return entityManager;
        } catch (Exception e) {
            logger.error("Erro ao pegar os dados da conecxão com o banco de dados. | " + e.getMessage());
            return entityManager;
        }
    }

    @Override
    public void getConnectionAdmin() {
        logger.debug("CONECTANTO COM O BANCO DE DADOS ADMINISTRADOR.");

        if ((entityManager == null) || (!entityManager.isOpen())
                || ( (entityManager.getProperties() != null) && (entityManager.getProperties().containsKey("hibernate.ejb.persistenceUnitName"))
                && (!entityManager.getProperties().get("hibernate.ejb.persistenceUnitName").toString().equalsIgnoreCase("persistenceSisInfoWeb")) ) ) {

            logger.info("CRIANDO ENTITY MANAGER FACTORY COM PERSISTENCESISINFOWEB");

            Map properties = new HashMap();
            properties.put("hibernate.connection.driver_class", "org.firebirdsql.jdbc.FBDriver");
            properties.put("hibernate.connection.url", "jdbc:firebirdsql:172.16.0.251/3050:C:\\SisInfo\\delphi\\SINOVO.FIR");
            properties.put("hibernate.connection.username", "SYSDBA");
            properties.put("hibernate.connection.password", "1");
            properties.put("hibernate.dialect", "org.hibernate.dialect.FirebirdDialect");
            properties.put("hibernate.show-sql", "false");
            properties.put("hibernate.temp.use_jdbc_metadata_defaults", "false");
            properties.put("hibernate.ejb.entitymanager_factory_name", "persistenceSisInfoWeb");

            EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistenceSisInfoWeb", properties);
            entityManager = (EntityManager) emf.createEntityManager();
        }
    }

    @Override
    public void closeEntityManager() {
        if (entityManager != null) {
            entityManager.close();
        }
    }

}
