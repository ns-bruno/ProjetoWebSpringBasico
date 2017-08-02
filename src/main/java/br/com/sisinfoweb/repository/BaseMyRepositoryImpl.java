/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import java.io.Serializable;
import java.sql.Connection;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.instrument.classloading.InstrumentationLoadTimeWeaver;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
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

        Object obj = entityManager.getDelegate();
        String s = obj.toString();
        Map<String, Object> maps = entityManager.getProperties();
        EntityManagerFactory emf = entityManager.getEntityManagerFactory();
        
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.firebirdsql.jdbc.FBDriver");
        dataSource.setUrl("jdbc:firebirdsql:172.16.0.251/3050:C:\\SisInfo\\delphi\\SINOVO.FIR");
        dataSource.setUsername("SAVARE");
        dataSource.setPassword("123");
        
        LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactory.setDataSource(dataSource);
        
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setShowSql(true);
        vendorAdapter.setDatabasePlatform("org.hibernate.dialect.FirebirdDialect");
        vendorAdapter.setGenerateDdl(true);
        
        entityManagerFactory.setJpaVendorAdapter(vendorAdapter);
        InstrumentationLoadTimeWeaver loadTimeWeaver = new InstrumentationLoadTimeWeaver();
        entityManagerFactory.setLoadTimeWeaver(loadTimeWeaver);
        
        List<T> lista = entityManagerFactory.getObject().createEntityManager().createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
        
        int i = lista.size();
        
        return entityManager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
    }

    @Transactional
    @Override
    public T findOneByGuid(String guid) {
        String consultaJpql = "SELECT A FROM " + this.getDomainClass().getSimpleName().toUpperCase().replace("ENTITY", "").replace("CUSTOM", "") + " A WHERE A.GUID = :GUID";
        Query query = entityManager.createQuery(consultaJpql, this.getDomainClass());
        query.setParameter("GUID", guid);
        
        return (T) query.getSingleResult();
    }

    @Transactional
    @Override
    public Integer saveCustomNativeQuery(String sqlQuery) {
        return entityManager.createNativeQuery(sqlQuery).executeUpdate();
    }

    
    
}
