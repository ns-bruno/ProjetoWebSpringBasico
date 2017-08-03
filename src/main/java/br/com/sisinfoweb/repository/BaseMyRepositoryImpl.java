/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
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

    @PersistenceContext(unitName = "persistenceSisInfoWeb")
    private final EntityManager entityManager;

    public BaseMyRepositoryImpl(JpaEntityInformation entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.entityManager = entityManager;
    }

    @Transactional
    @Override
    public List<T> findCustomNativeQuery(String sqlQuery) {

        EntityManagerFactory managerFactory = null;
        Map<String, String> persistenceMap = new HashMap<String, String>();

        persistenceMap.put("javax.persistence.jdbc.url", "jdbc:firebirdsql:172.16.0.251/3050:C:\\SisInfo\\delphi\\SINOVO.FIR");
        persistenceMap.put("javax.persistence.jdbc.user", "SAVARE");
        persistenceMap.put("javax.persistence.jdbc.password", "123");
        persistenceMap.put("javax.persistence.jdbc.driver", "org.firebirdsql.jdbc.FBDriver");

        managerFactory = Persistence.createEntityManagerFactory("persistenceSisInfoWebClient", persistenceMap);
        EntityManager manager = managerFactory.createEntityManager();

        List<T> lista = manager.createNativeQuery(sqlQuery, this.getDomainClass()).getResultList();
        
        
        /**DriverManagerDataSource dataSource = new DriverManagerDataSource();
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
        **/
        
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
