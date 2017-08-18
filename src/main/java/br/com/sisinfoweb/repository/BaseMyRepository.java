/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmadispoEntity;
import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

/**
 *
 * @author Bruno
 * @param <T> - Classe que representa a Entidade (Entity)
 * @param <ID>
 */
@NoRepositoryBean
public interface BaseMyRepository<T, ID extends Serializable> extends JpaRepository<T, ID>{
    
    final static Logger logger = LoggerFactory.getLogger(Object.class);
    
    List<T> findCustomNativeQuery(String sqlQuery);
    
    T findOneByGuid(String guid);
    
    Serializable saveCustomNativeQuery(String sqlQuery);
    
    EntityManager getConnectionClient(T entity);
    
    public void closeEntityManager();
    
    public void getConnectionAdmin();
}
