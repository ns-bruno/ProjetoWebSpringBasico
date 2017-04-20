/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmaempreEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Bruno
 */
public interface SmaempreRepository extends JpaRepository<SmaempreEntity, Integer>{
    
}
