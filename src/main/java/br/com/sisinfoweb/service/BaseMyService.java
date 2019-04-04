package br.com.sisinfoweb.service;

import br.com.sisinfoweb.banco.beans.PageBeans;
import br.com.sisinfoweb.banco.beans.PageableBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.exception.CustomException;
import br.com.sisinfoweb.funcoes.BaseMyLoggerFuncoes;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import br.com.sisinfoweb.repository.BaseMyRepository;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.transaction.Transactional;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.init.ScriptException;

/**
 *
 * @author Bruno Nogueira Silva
 * @param <R>
 * @param <E>
 */
public class BaseMyService<R extends BaseMyRepository, E> {

    public String COLUMNS_RESUME = null;
    private SmadispoEntity smadispoEntity = null;
    private BaseMyLoggerFuncoes logger;
    private SmalogwsEntity smalogwsEntity;
    final static Integer SIZE_BY_PAGE = 1000;

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

    public R getBaseMyRepository() {
        return baseMyRepository;
    }

    @Transactional
    public List<E> findAll() {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();

            String sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), null, null, null);

            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findAll | " + sqlQuery);
                
            return baseMyRepository.findAll(sqlQuery);
        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findAllClient() {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();

            String sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), null, null, null);

            ResultSet resultado = baseMyRepository.executarSQL(sqlQuery);

            return mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDALLCLIENT. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        } catch (ClassNotFoundException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDALLCLIENT. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        
        } catch (Exception e){
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI FINDALLCLIENT. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }

    
    @Transactional
    public PageBeans<E> findAllClient(String sort, PageableBeans pageable) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            int totalElements = 0;
            int size = SIZE_BY_PAGE;
            int totalPages = 0;
            int numberPage = 0;
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            ResultSet resultCount = baseMyRepository.executarSQL(new FuncoesPersonalizadas().construirSelectCountFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), null, sort));
            // Checa se retornou a quantidade de registro
            if ((resultCount != null) && (resultCount.next())) {
                totalElements = resultCount.getInt(1);
            }

            // Verifica se foi passado as configuracoes da paginacao
            if (pageable == null) {
                pageable = new PageableBeans();
            }
            if (pageable.getSize() > 0) {
                size = pageable.getSize();
            } else {
                pageable.setSize(size);
            }
            // Adiciona o total de elementos/rows
            pageable.setTotalElements(totalElements);

            // Pega o total de paginas possiveis
            totalPages = totalElements / size;
            // Verifica se eh paginas inteiras
            if ((totalElements % size) != 0) {
                totalPages++;
            }
            //Salva o total de paginas
            pageable.setTotalPages(totalPages);

            // Verifica se foi passado o numero da pagina
            if (pageable.getPageNumber() >= 0) {
                numberPage = pageable.getPageNumber();
            } else {
                pageable.setPageNumber(numberPage);
            }
            // Verifica se tem algum registro pra buscar
            if (totalElements > 0) {
                String sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), null, null, sort);

                String sqlQueryPage = "SELECT FIRST " + size + " SKIP " + (numberPage * size) + " " + sqlQuery.substring(6);

                ResultSet resultado = baseMyRepository.executarSQL(sqlQueryPage);

                List<E> listaResultado = mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));

                return new PageBeans<>(pageable, listaResultado);
            } else {
                return new PageBeans<>(pageable, null);
            }

        } catch (ScriptException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findAllClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (ClassNotFoundException | SQLException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findAllClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        
        } catch (Exception e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findAllClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }
    
    
    @Transactional
    public E findOneByGuidClient(String guid) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();

            String sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), null, "GUID = '" + guid + "'", null);

            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findOneByGuidClient | " + sqlQuery);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            ResultSet resultado = baseMyRepository.executarSQL(sqlQuery);

            return mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity")).get(0);
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findOneByGuidClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        } catch (ClassNotFoundException e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findOneByGuidClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        
        } catch (Exception e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findOneByGuidClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        }
    }

    @Transactional
    public E findOneByGuid(String guid) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findOneByGuid | " + guid);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            return (E) baseMyRepository.findOneByGuid(guid);
        } catch (Exception e) {
            smalogwsEntity.setTipo(logger.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI A BUSCA POR GUID. | findOneByGuid | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findCustomNativeQuery(Boolean resume, String sqlCustomParam, String columns, String where, String sort) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Cria um sql nativo se nao for passado um sqlCustom por parametro
            String sqlQuery;
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), COLUMNS_RESUME, where, sort);

                } else {
                    FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();
                    sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), columns, where, sort);
                }
            }
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findCustomNativeQuery | " + sqlQuery);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            return baseMyRepository.findCustomNativeQuery(sqlQuery);
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. findCustomNativeQuery | " + e.getMessage());
            
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. findCustomNativeQuery | " + e.getMessage());
            
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);            

            throw new CustomException(e);
        }
    }

    @Transactional
    public List<E> findCustomNativeQueryClient(Boolean resume, String sqlCustomParam, String columns, String where, String sort) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            String sqlQuery = null;

            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), COLUMNS_RESUME, where, sort);

                } else {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", ""), columns, where, sort);
                }
            }
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findCustomNativeQueryClient | " + sqlQuery);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            ResultSet resultado = baseMyRepository.executarSQL(sqlQuery);

            return mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (ClassNotFoundException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
            
        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }

    /**
     * Função usada para buscar dados no banco de dados do cliente, ou seja,
     * faz um select direto na base de dados do cliente que esta cadastrado no banco admin(WebService).
     * 
     * @param resume
     * @param sqlCustomParam
     * @param columns
     * @param where
     * @param sort
     * @param pageable
     * @return <code>PageBeans</code> - Contem um controle de paginação e uma lista com os dados.
     * @see PageBeans
     */
    @Transactional
    public PageBeans<E> findCustomNativeQueryClient(Boolean resume, String sqlCustomParam, String columns, String where, String sort, PageableBeans pageable) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            int totalElements = 0;
            int size = SIZE_BY_PAGE;
            int totalPages = 0;
            int numberPage = 0;
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            String sqlQuery;
            String sqlQueryPage;
            ResultSet resultCount;
            // Checo se foi passao um sql personalizado
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                String sqlQueryCount = sqlCustomParam.replace(  sqlCustomParam.substring(sqlCustomParam.indexOf("SELECT") + 6, sqlCustomParam.indexOf("FROM") - 1),
                                                                " COUNT(*) ");
                resultCount = baseMyRepository.executarSQL(sqlQueryCount);
            } else {
                resultCount = baseMyRepository.executarSQL(new FuncoesPersonalizadas().construirSelectCountFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), where, sort));
            }
            // Checa se retornou a quantidade de registro
            if ((resultCount != null) && (resultCount.next())) {
                totalElements = resultCount.getInt(1);
            }
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), COLUMNS_RESUME, where, sort);

                } else {
                    FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();
                    sqlQuery = funcoes.construirSelectFromParamJson(this.getClass().getSimpleName().toUpperCase().replace("SERVICE", "").replace("CUSTOM", ""), columns, where, sort);
                }
            }
            // Verifica se foi passado as configuracoes da paginacao
            if (pageable == null) {
                pageable = new PageableBeans();
            }
            if (pageable.getSize() > 0) {
                size = pageable.getSize();
            } else {
                pageable.setSize(size);
            }
            // Adiciona o total de elementos/rows
            pageable.setTotalElements(totalElements);

            // Pega o total de paginas possiveis
            totalPages = totalElements / size;
            // Verifica se eh paginas inteiras
            if ((totalElements % size) != 0) {
                totalPages++;
            }
            //Salva o total de paginas
            pageable.setTotalPages(totalPages);

            // Verifica se foi passado o numero da pagina
            if (pageable.getPageNumber() >= 0) {
                numberPage = pageable.getPageNumber();
            } else {
                pageable.setPageNumber(numberPage);
            }
            // Verifica se tem algum registro pra buscar
            if (totalElements > 0) {

                sqlQueryPage = "SELECT FIRST " + size + " SKIP " + (numberPage * size) + " " + sqlQuery.substring(sqlQuery.indexOf("SELECT") + 6);
                
                smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
		smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | findCustomNativeQueryClient Pageble | " + sqlQuery);
		//Instancia a classe de logger para registrar o log no banco
		new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
                
                ResultSet resultado = baseMyRepository.executarSQL(sqlQueryPage);

                List<E> listaResultado = mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));

                return new PageBeans<>(pageable, listaResultado);
            } else {
                return new PageBeans<>(pageable, null);
            }

        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient - Pageable. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (ClassNotFoundException | SQLException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient - Pageable. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        } catch (Exception e){
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI findCustomNativeQueryClient - Pageable. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public Serializable saveCustomNativeQuery(String queryInsert) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | saveCustomNativeQuery | " + queryInsert);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            return baseMyRepository.saveCustomNativeQuery(queryInsert);
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveCustomNativeQuery | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveCustomNativeQuery | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        }
    }

    @Transactional
    public Serializable saveCustomNativeQueryClient(String queryInsert) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | saveCustomNativeQueryClient | " + queryInsert);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            if ( (queryInsert.toUpperCase().contains("UPDATE OR INSERT")) || (queryInsert.toUpperCase().contains("UPDATE")) ){
                return baseMyRepository.executarInsertOrUpdate(queryInsert);
            }else {
                return baseMyRepository.executeInsertUpdateDelete(queryInsert);
            }
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveCustomNativeQueryClient | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveCustomNativeQueryClient | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }

    @Transactional
    public E save(E entity) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | save | " + entity.getClass().getSimpleName());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
                
            return (E) baseMyRepository.save(entity);
        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | save | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | save | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        }
    }

    @Transactional
    public Serializable saveClient(E entity) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_FIND + " | saveClient | " + entity.getClass().getSimpleName());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            return baseMyRepository.executeInsertUpdateDelete(new FuncoesPersonalizadas().construirInsertFromEntity(entity));

        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveClient | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_SAVE + " | saveClient | " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);

        }
    }
    
    @Transactional
    public PageBeans<E> storedProcedureWithSelectClient(String nameProcedure, Map<String, Object> parameter, Boolean resume, String sqlCustomParam, String columns, String where, String sort, PageableBeans pageable) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            int totalElements = 0;
            int size = SIZE_BY_PAGE;
            int totalPages = 0;
            int numberPage = 0;
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);

            String sqlQuery;
            String sqlQueryPage;
            ResultSet resultCount;
            // Checo se foi passao um sql personalizado
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                String sqlQueryCount = sqlCustomParam.replace(  sqlCustomParam.substring(sqlCustomParam.indexOf("SELECT") + 6, sqlCustomParam.indexOf("FROM") - 1),
                                                                " COUNT(*) ");
                resultCount = baseMyRepository.executarSQL(sqlQueryCount);
            } else {
                resultCount = baseMyRepository.executarSQL(new FuncoesPersonalizadas().construirSelectStoredProcedureCountFromParamJson(nameProcedure, parameter, where, sort));
            }
            // Checa se retornou a quantidade de registro
            if ((resultCount != null) && (resultCount.next())) {
                totalElements = resultCount.getInt(1);
            }
            if ((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())) {
                sqlQuery = sqlCustomParam;

            } else {
                // Checa se eh uma pesquisa com colunas resumidas
                if (resume) {
                    sqlQuery = new FuncoesPersonalizadas().construirSelectStoredProcedureFromParamJson(nameProcedure, parameter, COLUMNS_RESUME, where, sort);

                } else {
                    FuncoesPersonalizadas funcoes = new FuncoesPersonalizadas();
                    sqlQuery = funcoes.construirSelectStoredProcedureFromParamJson(nameProcedure, parameter, columns, where, sort);
                }
            }
            // Verifica se foi passado as configuracoes da paginacao
            if (pageable == null) {
                pageable = new PageableBeans();
            }
            if (pageable.getSize() > 0) {
                size = pageable.getSize();
            } else {
                pageable.setSize(size);
            }
            // Adiciona o total de elementos/rows
            pageable.setTotalElements(totalElements);

            // Pega o total de paginas possiveis
            totalPages = totalElements / size;
            // Verifica se eh paginas inteiras
            if ((totalElements % size) != 0) {
                totalPages++;
            }
            //Salva o total de paginas
            pageable.setTotalPages(totalPages);

            // Verifica se foi passado o numero da pagina
            if (pageable.getPageNumber() >= 0) {
                numberPage = pageable.getPageNumber();
            } else {
                pageable.setPageNumber(numberPage);
            }
            // Verifica se tem algum registro pra buscar
            if (totalElements > 0) {

                sqlQueryPage = "SELECT FIRST " + size + " SKIP " + (numberPage * size) + " " + sqlQuery.substring(sqlQuery.indexOf("SELECT") + 6);
                
                smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
                smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_STORED_PROCEDURE + " | storedProcedureWithSelectClient | " + sqlQueryPage);
                //Instancia a classe de logger para registrar o log no banco
                new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

                 ResultSet resultado = baseMyRepository.executarSQL(sqlQueryPage);

                List<E> listaResultado = mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));

                return new PageBeans<>(pageable, listaResultado);
            } else {
                return new PageBeans<>(pageable, null);
            }

        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_STORED_PROCEDURE + "NESTE CASO FOI storedProcedureWithSelectClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (ClassNotFoundException | SQLException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_STORED_PROCEDURE + "NESTE CASO FOI storedProcedureWithSelectClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        
        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_STORED_PROCEDURE + "NESTE CASO FOI storedProcedureWithSelectClient. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
    }
    
    @Transactional
    public PageBeans<E> storedProcedureExecuteClient(String nameProcedure, Map<String, Object> parameter, PageableBeans pageable) {
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
        try {
            int totalElements = 0;
            int size = SIZE_BY_PAGE;
            int totalPages = 0;
            int numberPage = 0;
            // Seta os dados do dispositivo
            baseMyRepository.setSmadispoEntity(smadispoEntity);
            
            // Verifica se foi passado as configuracoes da paginacao
            if (pageable == null) {
                pageable = new PageableBeans();
            }
            if (pageable.getSize() > 0) {
                size = pageable.getSize();
            } else {
                pageable.setSize(size);
            }
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_DEBUG);
            smalogwsEntity.setLog(MensagemPadrao.LOGGER_EXECUTE_STORED_PROCEDURE + " | storedProcedureExecuteClient - Pageable | " + nameProcedure + " | " + parameter);
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            Boolean resultado = baseMyRepository.storedProcedureExecute(new FuncoesPersonalizadas().construirExecuteStoredProcedureFromParamJson(nameProcedure, parameter));
            // Checa se retornou a quantidade de registro
            if ((resultado != null) && (resultado)) {
                totalElements = 0;
                // Adiciona o total de elementos/rows
                pageable.setTotalElements(totalElements);
                
                //listaResultado = mapResultSetToObject(resultado, Class.forName("br.com.sisinfoweb.entity." + this.getClass().getSimpleName().replace("Service", "") + "Entity"));
            }
            // Pega o total de paginas possiveis
            totalPages = totalElements / size;
            // Verifica se eh paginas inteiras
            if ((totalElements % size) != 0) {
                totalPages++;
            }
            //Salva o total de paginas
            pageable.setTotalPages(totalPages);

            // Verifica se foi passado o numero da pagina
            if (pageable.getPageNumber() >= 0) {
                numberPage = pageable.getPageNumber();
            } else {
                pageable.setPageNumber(numberPage);
            }
            return new PageBeans<>(pageable, null);

        } catch (ScriptException e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI storedProcedureExecuteClient - Pageable. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);

        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI storedProcedureExecuteClient - Pageable. " + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
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
        smalogwsEntity = new SmalogwsEntity();
        smalogwsEntity.setLevel(this.getClass().getSimpleName());
        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
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
                                        // Verifica se a coluna eh do tibo byte[](blob) e se eh um campo de texto
                                        if ( (columnValue instanceof byte[]) && 
                                                (columnName.equalsIgnoreCase("obs") || 
                                                 columnName.equalsIgnoreCase("observacao") || 
                                                 columnName.equalsIgnoreCase("descricao_auxiliar") ||
                                                 columnName.equalsIgnoreCase("descricao") ||
                                                 columnName.equalsIgnoreCase("complemento") ) ){
                                            BeanUtils.setProperty(bean, field.getName(), new String((byte[])columnValue));
                                        } else {
                                            BeanUtils.setProperty(bean, field.getName(), columnValue);
                                        }
                                        //BeanUtils.setProperty(bean, field.getName(), columnValue);
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
                    smalogwsEntity.setTipo(logger.TYPE_ERROR);
                    smalogwsEntity.setLog(MensagemPadrao.ERROR_MAPEAR_RESULTSET + "A CLASSE ENTITY NAO POSSUI A ANOTACAO @Entity");
                    //Instancia a classe de logger para registrar o log no banco
                    new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
                }
            } else {
                return null;
            }
        } catch (IllegalAccessException | SQLException | InstantiationException  e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_MAPEAR_RESULTSET + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);

            throw new CustomException(e);
        } catch (Exception e) {
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR_MAPEAR_RESULTSET + e.getMessage());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(baseMyRepository, smadispoEntity, smalogwsEntity);
            
            throw new CustomException(e);
        }
        return outputList;
    }
}
