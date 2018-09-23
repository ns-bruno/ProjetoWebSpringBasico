/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import java.io.Serializable;
import java.sql.ResultSet;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author Bruno
 * @param <T> - Classe que representa a Entidade (Entity)
 * @param <ID>
 */
@NoRepositoryBean
public interface BaseMyRepository<T, ID extends Serializable> extends PagingAndSortingRepository<T, ID>{
    
    final static Logger logger = LoggerFactory.getLogger(Object.class);
    
    public void setSmadispoEntity(SmadispoEntity smadispoEntity);
            
    List<T> findCustomNativeQuery(String sqlQuery);
    
    List<T> findAll(String sqlQuery);
    
    T findOneByGuid(String guid);
    
    /**
     * Função que salva dados no banco de dados do Webservice, ou seja, no servidor
     * interno do SAVARE/Webservice.
     * Retorna a quatidade de registros alterados ou inseridos.
     *
     * @param sqlQuery - Tem que passar uma instrução de insert nativa em SQL.
     * @return
     */
    Serializable saveCustomNativeQuery(String sqlQuery);
    
    public void closeEntityManager();
    
    public ResultSet executarSQL(String instrucaoSQL);
    
    public Serializable executeInsertUpdateDelete(String instrucaoSQL);
    
    public Serializable executarInsertOrUpdate(String instrucaoSQL);
    
    public void closeDatabase();
    
    public Boolean storedProcedureExecute(String instrucaoSQL);
            
}
