/**
 * This file was generated by the Jeddict
 */
package br.com.sisinfoweb.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SMADISPO")
public class SmadispoEntity {

    @Column(name = "ID_SMADISPO", table = "SMADISPO", nullable = false)
    @Id
    private Integer idSmadispo;
    
    @Column(name = "ID_CFACLIFO", table = "SMADISPO")
    private Integer idCfaclifo;
    
    @Column(name = "ID_CFACLIFO_FUN", table = "SMADISPO")
    private Integer idCfaclifoFun;
    
    @Column(name = "GUID", table = "SMADISPO", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "US_CAD", table = "SMADISPO", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "SMADISPO")
    @Basic
    private String dtCad;

    @Column(name = "DT_ALT", table = "SMADISPO")
    @Basic
    private String dtAlt;

    @Column(name = "CT_INTEG", table = "SMADISPO")
    @Basic
    private Integer ctInteg;

    @Column(name = "CODIGO", table = "SMADISPO")
    @Basic
    private Integer codigo;

    @Column(name = "DESCRICAO", table = "SMADISPO", length = 40)
    @Basic
    private String descricao;

    @Column(name = "IDENTIFICACAO", table = "SMADISPO", length = 40)
    @Basic
    private String identificacao;

    @Column(name = "ATIVO", table = "SMADISPO")
    @Basic
    private Character ativo;

    public Integer getIdSmadispo() {
        return this.idSmadispo;
    }

    public void setIdSmadispo(Integer idSmadispo) {
        this.idSmadispo = idSmadispo;
    }

    public Integer getIdCfaclifo() {
        return idCfaclifo;
    }

    public void setIdCfaclifo(Integer idCfaclifo) {
        this.idCfaclifo = idCfaclifo;
    }

    public Integer getIdCfaclifoFun() {
        return idCfaclifoFun;
    }

    public void setIdCfaclifoFun(Integer idCfaclifoFun) {
        this.idCfaclifoFun = idCfaclifoFun;
    }

    public String getGuid() {
        return this.guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public String getUsCad() {
        return this.usCad;
    }

    public void setUsCad(String usCad) {
        this.usCad = usCad;
    }

    public String getDtCad() {
        return this.dtCad;
    }

    public void setDtCad(String dtCad) {
        this.dtCad = dtCad;
    }

    public String getDtAlt() {
        return this.dtAlt;
    }

    public void setDtAlt(String dtAlt) {
        this.dtAlt = dtAlt;
    }

    public Integer getCtInteg() {
        return this.ctInteg;
    }

    public void setCtInteg(Integer ctInteg) {
        this.ctInteg = ctInteg;
    }

    public Integer getCodigo() {
        return this.codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getIdentificacao() {
        return this.identificacao;
    }

    public void setIdentificacao(String identificacao) {
        this.identificacao = identificacao;
    }

    public Character getAtivo() {
        return this.ativo;
    }

    public void setAtivo(Character ativo) {
        this.ativo = ativo;
    }

}
