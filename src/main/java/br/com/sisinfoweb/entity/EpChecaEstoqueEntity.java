/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
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
        name = "EP_CHECA_ESTOQUE", 
        procedureName = "EP_CHECA_ESTOQUE",
        parameters = {
            @StoredProcedureParameter(name = "ID_AEAESTOQ", mode = ParameterMode.IN, type = Integer.class),
            @StoredProcedureParameter(name = "ID_AEAUNVEN", mode = ParameterMode.IN, type = Integer.class),
            @StoredProcedureParameter(name = "TIPO", mode = ParameterMode.IN, type = String.class),
            @StoredProcedureParameter(name = "QUANTIDADE", mode = ParameterMode.IN, type = Double.class),
            
            @StoredProcedureParameter(name = "NEGATIVO", mode = ParameterMode.OUT, type = String.class)
        }
)
public class EpChecaEstoqueEntity implements Serializable{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer ID;
    
    @Column(name = "NEGATIVO", length = 1)
    @Basic
    private String negativo;

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getNegativo() {
        return negativo;
    }

    public void setNegativo(String negativo) {
        this.negativo = negativo;
    }
    
}
