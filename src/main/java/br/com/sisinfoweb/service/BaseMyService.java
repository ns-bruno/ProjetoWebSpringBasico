/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import br.com.sisinfoweb.repository.BaseMyRepository;
import java.io.Serializable;
import java.util.List;
import javax.transaction.Transactional;
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
    
    public BaseMyService(R smaempreRepository) {
        this.baseMyRepository = smaempreRepository;
    }

    /**
     * Seta os dados do dispositivo que esta fazendo a conexao.
     * E o webservice se encarrega de fazer uma nova conexão com o 
     * banco de dados da empresa licenciada.
     * @param smadispoEntity 
     */
    @Transactional
    public void setSmadispoEntity(SmadispoEntity smadispoEntity) {
        this.smadispoEntity = smadispoEntity;
        this.baseMyRepository.getConnectionClient(smadispoEntity);
    }

    @Transactional
    public List<E> findAll() {
        try{
            return baseMyRepository.findAll();
        } catch(Exception e){
            logger.error(MensagemPadrao.ERROR_FIND + e.getMessage());
            return null;
        }
    }
    
    @Transactional
    public E findOneByGuid(String guid){
        try{
            return (E) baseMyRepository.findOneByGuid(guid);
        } catch(Exception e){
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI A BUSCA POR GUID. " + e.getMessage());
            return null;
        }
    }

    @Transactional
    public List<E> findCustomNativeQuery(Boolean resume, String sqlCustomParam, String columns, String where) {
        try{
            // Cria um sql nativo se nao for passado um sqlCustom por parametro
            String sqlQuery;

            if((sqlCustomParam != null) && (!sqlCustomParam.isEmpty())){
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
        } catch(ScriptException e){
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. " +e.getMessage());
            return null;
        
        } catch(Exception e){
            logger.error(MensagemPadrao.ERROR_FIND + "NESTE CASO FOI UMA QUERY NATIVA DO SERVICE. " +e.getMessage());
            return null;
        }
    }
    
    @Transactional
    public Serializable saveCustomNativeQuery(String queryInsert){
        try {
            return baseMyRepository.saveCustomNativeQuery(queryInsert);
        } catch (ScriptException e){
            logger.error(MensagemPadrao.ERROR_SAVE + e.getMessage());
            return -1;
        
        } catch(Exception e){
            logger.error(MensagemPadrao.ERROR_FIND + e.getMessage());
            return -1;
        
        }
    }
    
    @Transactional
    public void closeEntityManager(){
        baseMyRepository.closeEntityManager();
    }
    
    public void getConnectionAdmin(){
        baseMyRepository.getConnectionAdmin();
    }
}
