/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;

/**
 *
 * @author Bruno
 */
@Entity
@NamedStoredProcedureQuery(
        name = "EP_GERA_PED_VENDA", 
        procedureName = "EP_GERA_PED_VENDA",
        parameters = {
            @StoredProcedureParameter(name = "ID_ORCAM", mode = ParameterMode.IN, type = Integer.class),
            @StoredProcedureParameter(name = "ID_SERIE_PED", mode = ParameterMode.IN, type = Integer.class),
            @StoredProcedureParameter(name = "DATA_PED", mode = ParameterMode.IN, type = String.class)
        }
)
public class EpGeraPedVendaEntity implements Serializable{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }
    
}
