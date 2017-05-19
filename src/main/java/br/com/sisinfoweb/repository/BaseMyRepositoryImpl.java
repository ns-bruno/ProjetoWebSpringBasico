/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmaempreEntity;
import java.io.Serializable;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.Tuple;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import org.eclipse.persistence.config.QueryHints;
import org.eclipse.persistence.config.ResultType;
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

}
