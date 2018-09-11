/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.exception.CustomException;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.hibernate.exception.ConstraintViolationException;
import org.hibernate.exception.GenericJDBCException;
import org.hibernate.exception.JDBCConnectionException;
import org.hibernate.exception.LockAcquisitionException;
import org.hibernate.exception.SQLGrammarException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

/**
 *
 * @author Bruno
 * @param <T>
 * @param <ID>
 */
public class BaseMyRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T, ID> implements BaseMyRepository<T, ID> {

    private Connection connection;
    private static final String DRIVE_FIREBIRD = "org.firebirdsql.jdbc.FBDriver";
    private SmadispoEntity smadispoEntity = null;

    @Autowired
    private final EntityManager entityManager;

    public BaseMyRepositoryImpl(JpaEntityInformation entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.entityManager = entityManager;
    }

    @Override
    public void setSmadispoEntity(SmadispoEntity smadispoEntity) {
        this.smadispoEntity = smadispoEntity;
    }

    @Override
    @Transactional
    public List<T> findCustomNativeQuery(String sqlQuery) {
        try {
            logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findCustomNativeQuery | " + sqlQuery);
            return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO EXECUTAR O SELECT findCustomNativeQuery. | " + e.getMessage());
            
            throw new CustomException(e);
        } catch (Exception e) {
            logger.error("ERRO AO EXECUTAR O SELECT findCustomNativeQuery. | " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Override
    @Transactional
    public List<T> findAll(String sqlQuery) {
        try {
            logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findAll | " + sqlQuery);
            return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO EXECUTAR O SELECT FINDALL. | " + e.getMessage());
            throw new CustomException(e);
            
        } catch (Exception e) {
            logger.error("ERRO AO EXECUTAR O SELECT FINDALL. | " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Override
    @Transactional
    public T findOneByGuid(String guid) {
        try {
            String consultaJpql = "SELECT A FROM " + this.getDomainClass().getSimpleName().toUpperCase().replace("ENTITY", "").replace("CUSTOM", "") + " A WHERE A.GUID = :GUID";

            logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findOneByGuid | " + consultaJpql);

            Query query = entityManager.createQuery(consultaJpql, this.getDomainClass());
            query.setParameter("GUID", guid);

            return (T) query.getSingleResult();
        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO EXECUTAR SELECT POR GUID. | " + e.getMessage());
            
            throw new CustomException(e);
        } catch (Exception e) {
            logger.error("ERRO AO EXECUTAR SELECT POR GUID. | " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    /**
     * Retorna a quatidade de registros alterados ou inseridos.
     *
     * @param sqlQuery
     * @return
     */
    @Override
    @Transactional
    public Integer saveCustomNativeQuery(String sqlQuery) {
        try {
            //entityManager.getTransaction().begin();

            logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | saveCustomNativeQuery | " + sqlQuery);

            Integer qtdInsert = entityManager.createNativeQuery(sqlQuery).executeUpdate();
            //entityManager.getTransaction().commit();
            return qtdInsert;

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO SALVAR DADOS. | " + e.getMessage());

            throw new CustomException(e);
        } catch (Exception e) {
            logger.error(e.getMessage());

            throw new CustomException(e);
        }
    }

    @Override
    @Transactional
    public <S extends T> S save(S entity) {
        try {
            //entityManager.getTransaction().begin();

            logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | save | ", entity);

            if (!entityManager.contains(entity)) {
                T en = entityManager.merge(entity);
                //String s = en.toString();
            } else {
                return entityManager.merge(entity);
            }
            //entityManager.getTransaction().commit();
            return entity;

        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException e) {
            logger.error("ERRO AO SALVAR DADOS. | " + e.getMessage());
            
            throw new CustomException(e);
        } catch (Exception e) {
            logger.error(e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Override
    @Transactional
    public void closeEntityManager() {
        if (entityManager != null) {
            entityManager.close();
        }
    }

    public Connection conectaBanco() {
        try {
            // Checa se foi passado os dados do dispositivo
            if (smadispoEntity != null) {
                logger.info("PEGANDO OS DADOS DE CONEXAO DA EMPRESA LICENCIADA. Identificacao: " + smadispoEntity.getIdentificacao());

                String sqlSelect = "SELECT * FROM CFACLIFO "
                        + "WHERE CFACLIFO.ID_CFACLIFO = (SELECT SMADISPO.ID_CFACLIFO FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "');";

                // Pega os dados de conexao da empresa licenciada
                Query query = entityManager.createNativeQuery(sqlSelect, CfaclifoEntity.class);
                List<CfaclifoEntity> cfaclifoEntity = query.getResultList();

                // Checa se retornou alguma coisa do banco
                if ((cfaclifoEntity != null) && (cfaclifoEntity.size() > 0)) {

                    Class.forName(DRIVE_FIREBIRD);
                    connection = DriverManager.getConnection(
                            "jdbc:firebirdsql:" + cfaclifoEntity.get(0).getIpServidorSisinfo() + "/" + cfaclifoEntity.get(0).getPortaBancoSisinfo() + ":" + cfaclifoEntity.get(0).getCaminhoBancoSisinfo() + "?rewriteBatchedStatements=true",
                            cfaclifoEntity.get(0).getUsuSisinfoWebservice(),
                            cfaclifoEntity.get(0).getSenhaSisinfoWebservice());
                } else {
                    logger.error(MensagemPadrao.ERROR_EMPRESA_NAO_LICENCIADA);

                    Exception e = new Exception(MensagemPadrao.ERROR_EMPRESA_NAO_LICENCIADA);
                
                    throw new CustomException(e);
                    /**RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();

                    StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_EMPRESA_NAO_LICENCIADA);

                    // Adiciona o status
                    retornoWebService.statusRetorno = statusRetorno;

                    throw new CustomException(retornoWebService);*/
                }
            } else {
                logger.error(MensagemPadrao.ERROR_CONECT_DATABASE + " | conectaBanco() | " + MensagemPadrao.ERROR_NOT_DISPOSITIVO);

                Exception e = new Exception(MensagemPadrao.ERROR_CONECT_DATABASE + " | " + MensagemPadrao.ERROR_NOT_DISPOSITIVO);
                
                throw new CustomException(e);
                /**RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();

                StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_CONECT_DATABASE + " | " + MensagemPadrao.ERROR_NOT_DISPOSITIVO);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;

                throw new CustomException(retornoWebService);*/
            }
            return connection;
        } catch (ClassNotFoundException | SQLException erroSQL) {
            logger.error(MensagemPadrao.ERROR_CONECT_DATABASE + " | " + erroSQL.getMessage());
            connection = null;

            throw new CustomException(erroSQL);

        }

    }

    @Override
    @Transactional
    public ResultSet executarSQL(String instrucaoSQL) {
        try {
            conectaBanco();
            if ((connection != null) && (!connection.isClosed())) {
                //statement = iniciaConexao.createStatement();
                //return statement.executeQuery(instrucaoSQL);
                PreparedStatement pstmt = connection.prepareStatement( "select * from aeaclase where id_aeaclase > ?" );
                pstmt.setString( 1, "1");
                String sqltemp = pstmt.toString();

                logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | executarSQL | " + instrucaoSQL);
                
                return connection.createStatement().executeQuery(instrucaoSQL);
            }
        } catch (SQLException ex) {
            logger.error(MensagemPadrao.ERROR_SQL_EXCEPTION + " | " + ex.getMessage());

            throw new CustomException(ex);
        }
        return null;
    }
    
    
    @Transactional
    @Override
    public Serializable executarInsertOrUpdate(String instrucaoSQL) {
        try {
            conectaBanco();
            if ((connection != null) && (!connection.isClosed())) {

                logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | executarInsertOrUpdate | " + instrucaoSQL);

                return connection.createStatement().executeUpdate(instrucaoSQL);
            }
        } catch (SQLException ex) {
            logger.error(MensagemPadrao.ERROR_SQL_EXCEPTION + " | " + ex.getMessage());

            throw new CustomException(ex);
        }
        return -1;
    }

    /**
     *
     * @param instrucaoSQL
     * @return
     */
    @Override
    @Transactional
    public Serializable executeInsertUpdateDelete(String instrucaoSQL) {
        PreparedStatement preparedStatement = null;
        Integer qtd = -1;
        try {
            conectaBanco();
            if ((connection != null) && (!connection.isClosed())) {
                //Statement statement = connection.createStatement();
                preparedStatement = connection.prepareStatement(instrucaoSQL);

                if ((preparedStatement != null) && (!preparedStatement.isClosed())) {
                    preparedStatement.getConnection().setAutoCommit(false);

                    logger.debug(MensagemPadrao.LOGGER_EXECUTE_FIND + " | executeInsertUpdateDelete | " + instrucaoSQL);

                    ResultSet rs = preparedStatement.executeQuery();

                    if ((rs != null) && (rs.next())) {
                        qtd = rs.getInt(1);
                        preparedStatement.getConnection().commit();
                        logger.info(MensagemPadrao.INSERT_SUCCESS);
                    } else {
                        preparedStatement.getConnection().rollback();
                    }
                }
            }
        } catch (SQLException ex) {
            if (preparedStatement != null){
                try {
                    preparedStatement.getConnection().rollback();
                } catch (SQLException ex1) {
                    logger.error(MensagemPadrao.ERROR_SQL_EXCEPTION + " | " + ex.getMessage());

                    throw new CustomException(ex);
                }
            }
            logger.error(MensagemPadrao.ERROR_SQL_EXCEPTION + " | " + ex.getMessage());

            throw new CustomException(ex);
        }
        return qtd;
    }

    @Override
    @Transactional
    public void closeDatabase() {
        try {
            if ((connection != null)) {

                logger.debug(MensagemPadrao.LOGGER_CLOSE_DATABASE);

                connection.close();
            }
        } catch (SQLException ex) {
            logger.error(MensagemPadrao.ERROR_CLOSE_DATABASE + " | " + ex.getMessage());

            throw new CustomException(ex);
        }
    }

    @Override
    @Transactional
    public Boolean storedProcedureExecute(String instrucaoSQL){
        try {
            conectaBanco();
            if ((connection != null) && (!connection.isClosed())) {

                logger.debug(MensagemPadrao.LOGGER_EXECUTE_STORED_PROCEDURE + " | storedProcedureExecute | " + instrucaoSQL);

                return connection.createStatement().execute(instrucaoSQL);
            }
        } catch (JDBCConnectionException | SQLGrammarException | ConstraintViolationException
                | LockAcquisitionException | GenericJDBCException | SQLException e) {
            logger.error("ERRO AO EXECUTAR STORED PROCEDURE. | " + e.getMessage());
            throw new CustomException(e);
            
        }
        return null;
    }
}
