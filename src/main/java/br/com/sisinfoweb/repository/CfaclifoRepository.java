/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.repository;

import br.com.sisinfoweb.entity.CfaclifoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Bruno
 */
public interface CfaclifoRepository extends JpaRepository<CfaclifoEntity, Integer>{
    
    @Query(value = "select * from cfaclifo where cfaclifo.guid = :guid", nativeQuery = true)
//    @Query("SELECT NEW  br.com.sisinfoweb.entity.CfaclifoEntity(CLIFO.ID_CFACLIFO, CLIFO.ID_CFAATIVI, CLIFO.ID_CFAAREAS, CLIFO.ID_CFATPCLI, CLIFO.ID_CFASTATU, "
//            + "CLIFO.ID_SMAEMPRE, CLIFO.ID_SMADPTO, CLIFO.GUID, CLIFO.US_CAD, CLIFO.DT_CAD, CLIFO.US_ALT, CLIFO.DT_ALT, "
//            + "CLIFO.CPF_CGC, CLIFO.IE_RG, CLIFO.NOME_RAZAO, CLIFO.CODIGO_CLI, CLIFO.CODIGO_USU, CLIFO.CODIGO_FUN, "
//            + "CLIFO.NOME_FANTASIA, CLIFO.SENHA, CLIFO.ATIVO) FROM CFACLIFO CLIFO WHERE CLIFO.GUID = ':guid'")
    CfaclifoEntity findResumeByGuidEquals(@Param("guid") String guid);
}
