/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.SmaempreEntity;

/**
 *
 * @author Bruno
 */
public interface SmaempreRepository extends BaseMyRepository<SmaempreEntity, Integer>{
    String COLUMNS_RESUME = 
            "SMAEMPRE.ID_SMAEMPRE, SMAEMPRE.GUID, SMAEMPRE.DT_ALT, SMAEMPRE.CODIGO, SMAEMPRE.NOME_RAZAO, SMAEMPRE.NOME_FATASIA, "
            + "SMAEMPRE.CPF_CGC, SMAEMPRE.PESSOA, SMAEMPRE.IE_RG, SMAEMPRE.ORGAO_EMISSOR";
    
    
    //@Query(value = "SELECT * FROM SMAEMPRE :where", nativeQuery = true)
    //List<SmaempreEntity> findCustomNativeQuery(@Param("where")String where);
 
    //@Query(value = "SELECT " + COLUMNS_RESUME + " FROM SMAEMPRE ID_SMAEMPRE = :where", nativeQuery = true)
    //List<SmaempreEntity> resumeFindCustomNativeQuery(@Param("where")String where);
}
