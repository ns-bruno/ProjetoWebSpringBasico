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
@Table(name = "GCAPRECO")
public class GcaprecoEntity {

    @Column(name = "ID_GCAPRECO", table = "GCAPRECO", nullable = false)
    @Id
    private Integer idGcapreco;

    @Column(name = "ID_GCATPLOC", table = "GCAPRECO")
    @Basic
    private Integer idGcatploc;

    @Column(name = "ID_GCAPRODU", table = "GCAPRECO")
    @Basic
    private Integer idGcaprodu;

    @Column(name = "US_CAD", table = "GCAPRECO", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "GCAPRECO")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "GCAPRECO")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "GCAPRECO")
    @Basic
    private Integer ctInteg;

    @Column(name = "GUID", table = "GCAPRECO", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "PRECO", table = "GCAPRECO", nullable = false)
    @Basic(optional = false)
    private double preco;

    @Column(name = "MULTA_DIARIA", table = "GCAPRECO", nullable = false)
    @Basic(optional = false)
    private double multaDiaria;

    @Column(name = "DESCONTO_DIARIO", table = "GCAPRECO", nullable = false)
    @Basic(optional = false)
    private double descontoDiario;

    public Integer getIdGcapreco() {
        return this.idGcapreco;
    }

    public void setIdGcapreco(Integer idGcapreco) {
        this.idGcapreco = idGcapreco;
    }

    public Integer getIdGcatploc() {
        return this.idGcatploc;
    }

    public void setIdGcatploc(Integer idGcatploc) {
        this.idGcatploc = idGcatploc;
    }

    public Integer getIdGcaprodu() {
        return this.idGcaprodu;
    }

    public void setIdGcaprodu(Integer idGcaprodu) {
        this.idGcaprodu = idGcaprodu;
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

    public double getPreco() {
        return this.preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double getMultaDiaria() {
        return this.multaDiaria;
    }

    public void setMultaDiaria(double multaDiaria) {
        this.multaDiaria = multaDiaria;
    }

    public double getDescontoDiario() {
        return this.descontoDiario;
    }

    public void setDescontoDiario(double descontoDiario) {
        this.descontoDiario = descontoDiario;
    }

}