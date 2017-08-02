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

@Entity
@Table(name = "CFAHOBYS")
public class CfahobysEntity {

    @Column(name = "ID_CFAHOBYS", table = "CFAHOBYS", nullable = false)
    @Id
    private Integer idCfahobys;

    @Column(name = "ID_CFACONTA", table = "CFAHOBYS")
    @Basic
    private Integer idCfaconta;

    @Column(name = "ID_CFAHOBBY", table = "CFAHOBYS", nullable = false)
    @Basic(optional = false)
    private int idCfahobby;

    @Column(name = "ID_CFADEPEN", table = "CFAHOBYS")
    @Basic
    private Integer idCfadepen;

    @Column(name = "ID_CFACLIFO", table = "CFAHOBYS")
    @Basic
    private Integer idCfaclifo;

    @Column(name = "GUID", table = "CFAHOBYS", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "US_CAD", table = "CFAHOBYS", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "CFAHOBYS")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "CFAHOBYS")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "CFAHOBYS")
    @Basic
    private Integer ctInteg;

    public Integer getIdCfahobys() {
        return this.idCfahobys;
    }

    public void setIdCfahobys(Integer idCfahobys) {
        this.idCfahobys = idCfahobys;
    }

    public Integer getIdCfaconta() {
        return this.idCfaconta;
    }

    public void setIdCfaconta(Integer idCfaconta) {
        this.idCfaconta = idCfaconta;
    }

    public int getIdCfahobby() {
        return this.idCfahobby;
    }

    public void setIdCfahobby(int idCfahobby) {
        this.idCfahobby = idCfahobby;
    }

    public Integer getIdCfadepen() {
        return this.idCfadepen;
    }

    public void setIdCfadepen(Integer idCfadepen) {
        this.idCfadepen = idCfadepen;
    }

    public Integer getIdCfaclifo() {
        return this.idCfaclifo;
    }

    public void setIdCfaclifo(Integer idCfaclifo) {
        this.idCfaclifo = idCfaclifo;
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

}