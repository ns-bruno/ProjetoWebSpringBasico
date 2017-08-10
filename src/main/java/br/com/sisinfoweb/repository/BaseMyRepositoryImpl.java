/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmaempreEntity;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
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
    public List<T> findCustomNativeQuery(String sqlQuery) {

        return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
    }

    @Override
    public T findOneByGuid(String guid) {
        String consultaJpql = "SELECT A FROM " + this.getDomainClass().getSimpleName().toUpperCase().replace("ENTITY", "").replace("CUSTOM", "") + " A WHERE A.GUID = :GUID";
        Query query = entityManager.createQuery(consultaJpql, this.getDomainClass());
        query.setParameter("GUID", guid);
        
        return (T) query.getSingleResult();
    }

    @Override
    public Integer saveCustomNativeQuery(String sqlQuery) {
        return entityManager.createNativeQuery(sqlQuery).executeUpdate();
    }
    

    @Override
    public EntityManager getConnectionEntityManager(T smadispoEntity){
        try {
            String consultaJpql = "SELECT * FROM SMAEMPRE "
                                + "WHERE SMAEMPRE.ID_SMAEMPRE = (SELECT CFACLIFO.ID_SMAEMPRE FROM CFACLIFO WHERE CFACLIFO.GUID = '" + ((SmadispoEntity) smadispoEntity).getGuidClifo() + "')";
            Query query = entityManager.createNativeQuery(consultaJpql, this.getDomainClass());
            
            List<SmaempreEntity> smaempreEntity = query.getResultList();
            
            // Checa se retornou alguma coisa do banco
            if ((smaempreEntity != null) && (smaempreEntity.size() > 0)) {
                Map properties = new HashMap();
                properties.put("hibernate.connection.driver_class", "org.firebirdsql.jdbc.FBDriver");
                properties.put("hibernate.connection.url", "jdbc:firebirdsql:" + smaempreEntity.get(0).getIpServidorSisinfo() + "/" + smaempreEntity.get(0).getPortaBancoSisinfo() + ":" + smaempreEntity.get(0).getCaminhoBancoSisinfo() +"");
                properties.put("hibernate.connection.username", smaempreEntity.get(0).getUsuSisinfoWebservice());
                properties.put("hibernate.connection.password", smaempreEntity.get(0).getSenhaSisinfoWebservice());
                properties.put("hibernate.dialect", "org.hibernate.dialect.FirebirdDialect");
                properties.put("hibernate.show-sql", "false");
                properties.put("hibernate.temp.use_jdbc_metadata_defaults", "false");
                properties.put("hibernate.ejb.entitymanager_factory_name", "persistenceSisInfoWebClient");

                EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistenceSisInfoWebClient",properties);
                entityManager = (EntityManager) emf.createEntityManager();
            }
            return entityManager;
        } catch (Exception e) {
            logger.error("Erro ao pegar os dados da conecxão com o banco de dados. " + e.getMessage());
            return entityManager;
        }
    }
    
    @Override
    public void closeEntityManager(){
        if(entityManager != null){
            entityManager.close();
        }
    }
}
