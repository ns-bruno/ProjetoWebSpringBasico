/**
 * This file was generated by the Jeddict
 */
package br.com.sisinfoweb.entity;

import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "CBACAIXA", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"ID_CBANUMCX", "DT_MOVIMENTO"})})
public class CbacaixaEntity {

    @Column(name = "ID_CBACAIXA", table = "CBACAIXA", nullable = false)
    @Id
    private Integer idCbacaixa;

    @Column(name = "ID_CBANUMCX", table = "CBACAIXA", nullable = false)
    @Basic(optional = false)
    private int idCbanumcx;

    @Column(name = "ID_CBALOTES", table = "CBACAIXA", nullable = false)
    @Basic(optional = false)
    private int idCbalotes;

    @Column(name = "GUID", table = "CBACAIXA", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "US_CAD", table = "CBACAIXA", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "CBACAIXA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "CBACAIXA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "CBACAIXA")
    @Basic
    private Integer ctInteg;

    @Column(name = "DT_MOVIMENTO", table = "CBACAIXA")
    @Basic
    @Temporal(TemporalType.DATE)
    private Date dtMovimento;

    @Column(name = "SITUACAO", table = "CBACAIXA", nullable = false)
    @Basic(optional = false)
    private short situacao;

    public Integer getIdCbacaixa() {
        return this.idCbacaixa;
    }

    public void setIdCbacaixa(Integer idCbacaixa) {
        this.idCbacaixa = idCbacaixa;
    }

    public int getIdCbanumcx() {
        return this.idCbanumcx;
    }

    public void setIdCbanumcx(int idCbanumcx) {
        this.idCbanumcx = idCbanumcx;
    }

    public int getIdCbalotes() {
        return this.idCbalotes;
    }

    public void setIdCbalotes(int idCbalotes) {
        this.idCbalotes = idCbalotes;
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

    public Date getDtCad() {
        return this.dtCad;
    }

    public void setDtCad(Date dtCad) {
        this.dtCad = dtCad;
    }

    public Date getDtAlt() {
        return this.dtAlt;
    }

    public void setDtAlt(Date dtAlt) {
        this.dtAlt = dtAlt;
    }

    public Integer getCtInteg() {
        return this.ctInteg;
    }

    public void setCtInteg(Integer ctInteg) {
        this.ctInteg = ctInteg;
    }

    public Date getDtMovimento() {
        return this.dtMovimento;
    }

    public void setDtMovimento(Date dtMovimento) {
        this.dtMovimento = dtMovimento;
    }

    public short getSituacao() {
        return this.situacao;
    }

    public void setSituacao(short situacao) {
        this.situacao = situacao;
    }

}