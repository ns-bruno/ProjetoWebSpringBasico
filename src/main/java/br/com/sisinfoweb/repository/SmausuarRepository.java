/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmausuarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Bruno
 */
public interface SmausuarRepository extends JpaRepository<SmausuarEntity, Integer>{
    
    @Query(value = "select * from smausuar where smausuar.nome = :nome", nativeQuery = true)
    SmausuarEntity findByFirstnameEquals(@Param("nome") String nome);
    
    @Query(value = "select * from smausuar where smausuar.guid = :guid", nativeQuery = true)
    SmausuarEntity findByGuidEquals(@Param("guid") String guid);
}
