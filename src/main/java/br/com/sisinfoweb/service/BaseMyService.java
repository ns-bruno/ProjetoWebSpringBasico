/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.exception.CustomException;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import br.com.sisinfoweb.repository.BaseMyRepository;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.transaction.Transactional;
import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.init.ScriptException;

/**
 *
 * @author Bruno
 * @param <R>
 * @param <E>
 */
public class BaseMyService<R extends BaseMyRepository, E> {

    public String COLUMNS_RESUME = null;
    private SmadispoEntity smadispoEntity = null;
    final static Logger logger = LoggerFactory.getLogger(Object.class);

    @Autowired
    private final R baseMyRepository;

    public BaseMyService(R baseMyRepository) {
        this.baseMyRepository = baseMyRepository;
    }

    /**
     * Seta os dados do dispositivo que esta fazendo a conexao. E o webservice
     * se encarrega de fazer uma nova conexão com o banco de dados da empresa
     * licenciada.
     *
     * @param smadispoEntity
     */
    public void setSmadispoEntity(SmadispoEntity smadispoEntity) {
        this.smadispoEntity = smadispoEntity;
    }

    @Transactional
    public List<E> findAll() {
        try {
            FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();

            String sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), null, null);

            return baseMyRepository.findAll(sqlQuery);
        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_FIND + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findAllClient() {
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();

            String sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), null, null);

            ResultSet resultado = baseMyRepository.executarSQL(sqlQuery);

            return mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDALLCLIENT. " + e.getMessage());
            
            throw new CustomException(e);

        } catch (ClassNotFoundException e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDALLCLIENT. " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public E findOneByGuid(String guid) {
        try {
            return (E) baseMyRepository.findOneByGuid(guid);
        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI A BUSCA POR GUID. " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findCustomNativeQuery(Boolean resume, String sqlCustomParam, String columns, String where) {
        try {
            // Cria um sql nativo se nao for passado um sqlCustom por parametro
            String sqlQuery;
            logger.debug(where);
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), COLUMNS_RESUME, where);

                } else {
                    FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();
                    sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), columns, where);
                }
            }
            return baseMyRepository.findCustomNativeQuery(sqlQuery);
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. " + e.getMessage());
            
            throw new CustomException(e);

        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. " + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findCustomNativeQueryClient(Boolean resume, String sqlCustomParam, String columns, String where) {
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            String sqlQuery = null;

            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), COLUMNS_RESUME, where);

                } else {
                    FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();
                    sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), columns, where);
                }
            }
            ResultSet resultado = baseMyRepository.executarSQL(sqlQuery);

            return mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDCUSTOMNATIVEQUERYCLIENT. " + e.getMessage());
            //return null;
            throw new CustomException(e);

        } catch (ClassNotFoundException e) {
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDCUSTOMNATIVEQUERYCLIENTE. " + e.getMessage());
            //return null;
            throw new CustomException(e);
        }
    }

    
    
    @Transactional
    public Serializable saveCustomNativeQuery(String queryInsert) {
        try {
            return baseMyRepository.saveCustomNativeQuery(queryInsert);
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        }
    }

    @Transactional
    public Serializable saveCustomNativeQueryClient(String queryInsert) {
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            return baseMyRepository.executeInsertUpdateDelete(queryInsert);
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public E save(E entity) {
        try {
            return (E) baseMyRepository.save(entity);
        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        }
    }

    @Transactional
    public Serializable saveClient(E entity) {
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            return baseMyRepository.executeInsertUpdateDelete(new FuncoesPersonalizadas().construirInsertFromEntity(entity));

        } catch (ScriptException e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            
            throw new CustomException(e);

        }
    }

    @Transactional
    public void closeEntityManager() {
        baseMyRepository.closeEntityManager();
    }

    @Transactional
    public void closeDatabase() {
        baseMyRepository.closeDatabase();
    }

    @SuppressWarnings("unchecked")
    public List<E> mapResultSetToObject(ResultSet rs, Class outputClass) {
        List<E> outputList = null;
        try {
            // make sure resultset is not null
            if (rs != null) {
                // check if outputClass has 'Entity' annotation
                if (outputClass.isAnnotationPresent(Entity.class)) {
                    // get the resultset metadata
                    ResultSetMetaData rsmd = rs.getMetaData();
                    // get all the attributes of outputClass
                    Field[] fields = outputClass.getDeclaredFields();
                    while (rs.next()) {
                        E bean = (E) outputClass.newInstance();
                        for (int _iterator = 0; _iterator < rsmd.getColumnCount(); _iterator++) {
                            // getting the SQL column name
                            String columnName = rsmd.getColumnLabel(_iterator + 1);
                            // reading the value of the SQL column
                            Object columnValue = rs.getObject(_iterator + 1);
                            // iterating over outputClass attributes to check if any attribute has 'Column' annotation with matching 'name' value
                            for (Field field : fields) {
                                if (field.isAnnotationPresent(Column.class)) {
                                    Column column = field.getAnnotation(Column.class);
                                    if (column.name().equalsIgnoreCase(columnName) && columnValue != null) {
                                        BeanUtils.setProperty(bean, field.getName(), columnValue);
                                        break;
                                    }
                                }
                            }
                        }
                        if (outputList == null) {
                            outputList = new ArrayList<E>();
                        }
                        outputList.add(bean);
                    }
                    // Checa se a lista eh nula pra retornar uma lista vazia
                    if (outputList == null) {
                        outputList = new ArrayList<E>();
                    }
                } else {
                    logger.error(MensagemPadrao.ERROR_MAPEAR_RESULTSET + "A CLASSE ENTITY NAO POSSUI A ANOTACAO @Entity");
                }
            } else {
                return null;
            }
        } catch (IllegalAccessException | SQLException | InstantiationException e) {
            logger.error(MensagemPadrao.ERROR_MAPEAR_RESULTSET + e.getMessage());
            
            throw new CustomException(e);
        } catch (Exception e) {
            logger.error(MensagemPadrao.ERROR_MAPEAR_RESULTSET + e.getMessage());
            
            throw new CustomException(e);
        }
        return outputList;
    }
}
