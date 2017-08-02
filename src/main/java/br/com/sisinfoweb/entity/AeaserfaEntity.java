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
@Table(name = "AEASERFA", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"ID_AEASERIE", "ID_AEAFAMIL"})})
public class AeaserfaEntity {

    @Column(name = "ID_AEASERFA", table = "AEASERFA", nullable = false)
    @Id
    private Integer idAeaserfa;

    @Column(name = "ID_AEASERIE", table = "AEASERFA", nullable = false)
    @Basic(optional = false)
    private int idAeaserie;

    @Column(name = "ID_AEAFAMIL", table = "AEASERFA", nullable = false)
    @Basic(optional = false)
    private int idAeafamil;

    @Column(name = "GUID", table = "AEASERFA", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "US_CAD", table = "AEASERFA", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "AEASERFA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "AEASERFA")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "AEASERFA")
    @Basic
    private Integer ctInteg;

    @Column(name = "TIPO", table = "AEASERFA", nullable = false)
    @Basic(optional = false)
    private Character tipo;

    public Integer getIdAeaserfa() {
        return this.idAeaserfa;
    }

    public void setIdAeaserfa(Integer idAeaserfa) {
        this.idAeaserfa = idAeaserfa;
    }

    public int getIdAeaserie() {
        return this.idAeaserie;
    }

    public void setIdAeaserie(int idAeaserie) {
        this.idAeaserie = idAeaserie;
    }

    public int getIdAeafamil() {
        return this.idAeafamil;
    }

    public void setIdAeafamil(int idAeafamil) {
        this.idAeafamil = idAeafamil;
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

    public Character getTipo() {
        return this.tipo;
    }

    public void setTipo(Character tipo) {
        this.tipo = tipo;
    }

}