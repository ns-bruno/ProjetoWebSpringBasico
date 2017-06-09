/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import java.io.Serializable;
import java.util.List;
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
    
    List<T> findCustomNativeQuery(String sqlQuery);
    
    T findOneByGuid(String guid);
}
