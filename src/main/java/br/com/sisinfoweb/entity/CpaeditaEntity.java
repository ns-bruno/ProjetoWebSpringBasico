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
@Table(name = "CPAEDITA")
public class CpaeditaEntity {

    @Column(name = "ID_CPAEDITA", table = "CPAEDITA", nullable = false)
    @Id
    private Integer idCpaedita;

    @Column(name = "US_CAD", table = "CPAEDITA", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "CPAEDITA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "CPAEDITA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "CPAEDITA")
    @Basic
    private Integer ctInteg;

    @Column(name = "GUID", table = "CPAEDITA", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "CODIGO", table = "CPAEDITA")
    @Basic
    private Integer codigo;

    @Column(name = "DT_EDITAL", table = "CPAEDITA")
    @Basic
    @Temporal(TemporalType.DATE)
    private Date dtEdital;

    @Column(name = "DT_PREV_PROT", table = "CPAEDITA")
    @Basic
    @Temporal(TemporalType.DATE)
    private Date dtPrevProt;

    public Integer getIdCpaedita() {
        return this.idCpaedita;
    }

    public void setIdCpaedita(Integer idCpaedita) {
        this.idCpaedita = idCpaedita;
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

    public String getGuid() {
        return this.guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public Integer getCodigo() {
        return this.codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Date getDtEdital() {
        return this.dtEdital;
    }

    public void setDtEdital(Date dtEdital) {
        this.dtEdital = dtEdital;
    }

    public Date getDtPrevProt() {
        return this.dtPrevProt;
    }

    public void setDtPrevProt(Date dtPrevProt) {
        this.dtPrevProt = dtPrevProt;
    }

}