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
@Table(name = "AEAITGPR", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"ID_AEAAGPPR", "SEQUENCIA"})})
public class AeaitgprEntity {

    @Column(name = "ID_AEAITGPR", table = "AEAITGPR", nullable = false)
    @Id
    private Integer idAeaitgpr;

    @Column(name = "ID_AEAAGPPR", table = "AEAITGPR", nullable = false)
    @Basic(optional = false)
    private int idAeaagppr;

    @Column(name = "ID_AEAMARCA", table = "AEAITGPR")
    @Basic
    private Integer idAeamarca;

    @Column(name = "ID_AEAFAMIL", table = "AEAITGPR")
    @Basic
    private Integer idAeafamil;

    @Column(name = "ID_AEACLASE", table = "AEAITGPR")
    @Basic
    private Integer idAeaclase;

    @Column(name = "ID_AEAGRUPO", table = "AEAITGPR")
    @Basic
    private Integer idAeagrupo;

    @Column(name = "ID_AEASGRUP", table = "AEAITGPR")
    @Basic
    private Integer idAeasgrup;

    @Column(name = "ID_AEAPRODU", table = "AEAITGPR")
    @Basic
    private Integer idAeaprodu;

    @Column(name = "GUID", table = "AEAITGPR", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "US_CAD", table = "AEAITGPR", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "AEAITGPR")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "AEAITGPR")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "AEAITGPR")
    @Basic
    private Integer ctInteg;

    @Column(name = "SEQUENCIA", table = "AEAITGPR", nullable = false)
    @Basic(optional = false)
    private int sequencia;

    public Integer getIdAeaitgpr() {
        return this.idAeaitgpr;
    }

    public void setIdAeaitgpr(Integer idAeaitgpr) {
        this.idAeaitgpr = idAeaitgpr;
    }

    public int getIdAeaagppr() {
        return this.idAeaagppr;
    }

    public void setIdAeaagppr(int idAeaagppr) {
        this.idAeaagppr = idAeaagppr;
    }

    public Integer getIdAeamarca() {
        return this.idAeamarca;
    }

    public void setIdAeamarca(Integer idAeamarca) {
        this.idAeamarca = idAeamarca;
    }

    public Integer getIdAeafamil() {
        return this.idAeafamil;
    }

    public void setIdAeafamil(Integer idAeafamil) {
        this.idAeafamil = idAeafamil;
    }

    public Integer getIdAeaclase() {
        return this.idAeaclase;
    }

    public void setIdAeaclase(Integer idAeaclase) {
        this.idAeaclase = idAeaclase;
    }

    public Integer getIdAeagrupo() {
        return this.idAeagrupo;
    }

    public void setIdAeagrupo(Integer idAeagrupo) {
        this.idAeagrupo = idAeagrupo;
    }

    public Integer getIdAeasgrup() {
        return this.idAeasgrup;
    }

    public void setIdAeasgrup(Integer idAeasgrup) {
        this.idAeasgrup = idAeasgrup;
    }

    public Integer getIdAeaprodu() {
        return this.idAeaprodu;
    }

    public void setIdAeaprodu(Integer idAeaprodu) {
        this.idAeaprodu = idAeaprodu;
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

    public int getSequencia() {
        return this.sequencia;
    }

    public void setSequencia(int sequencia) {
        this.sequencia = sequencia;
    }

}