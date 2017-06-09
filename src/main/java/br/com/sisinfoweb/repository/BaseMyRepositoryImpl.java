/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Bruno
 * @param <T>
 * @param <ID>
 */
public class BaseMyRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T, ID> implements BaseMyRepository<T, ID> {

    private final EntityManager entityManager;

    public BaseMyRepositoryImpl(JpaEntityInformation entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.entityManager = entityManager;
    }

    @Transactional
    @Override
    public List<T> findCustomNativeQuery(String sqlQuery) {

        //Query query = entityManager.createNativeQuery(sqlQuery, this.getDomainClass());
        
        //List<T> resultados = (List<T>) query.getResultList();

        //List<T> lista = entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
        return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
    }

    @Transactional
    @Override
    public T findOneByGuid(String guid) {
        String consultaJpql = "SELECT A FROM " + this.getDomainClass().getSimpleName().toUpperCase().replace("ENTITY", "") + " A WHERE A.GUID = :GUID";
        Query query = entityManager.createQuery(consultaJpql, this.getDomainClass());
        query.setParameter("GUID", guid);
        
        return (T) query.getSingleResult();
    }

    
}
