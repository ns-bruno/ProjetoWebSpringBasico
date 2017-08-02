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
@Table(name = "APANEGAT")
public class ApanegatEntity {

    @Column(name = "ID_APANEGAT", table = "APANEGAT", nullable = false)
    @Id
    private Integer idApanegat;

    @Column(name = "ID_APAPAROQ", table = "APANEGAT")
    @Basic
    private Integer idApaparoq;

    @Column(name = "ID_APACOMUN", table = "APANEGAT")
    @Basic
    private Integer idApacomun;

    @Column(name = "US_CAD", table = "APANEGAT", length = 20)
    @Basic
    private String usCad;

    @Column(name = "DT_CAD", table = "APANEGAT")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtCad;

    @Column(name = "DT_ALT", table = "APANEGAT")
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtAlt;

    @Column(name = "CT_INTEG", table = "APANEGAT")
    @Basic
    private Integer ctInteg;

    @Column(name = "GUID", table = "APANEGAT", nullable = false, length = 16)
    @Basic(optional = false)
    private String guid;

    @Column(name = "NOME", table = "APANEGAT", length = 60)
    @Basic
    private String nome;

    @Column(name = "ANO", table = "APANEGAT", nullable = false)
    @Basic(optional = false)
    private int ano;

    @Column(name = "ANOFIM", table = "APANEGAT", nullable = false)
    @Basic(optional = false)
    private int anofim;

    @Column(name = "DT_NASCIMENTO", table = "APANEGAT")
    @Basic
    @Temporal(TemporalType.DATE)
    private Date dtNascimento;

    @Column(name = "PAI", table = "APANEGAT", length = 60)
    @Basic
    private String pai;

    @Column(name = "MAE", table = "APANEGAT", length = 60)
    @Basic
    private String mae;

    @Column(name = "EMISSAO", table = "APANEGAT")
    @Basic
    @Temporal(TemporalType.DATE)
    private Date emissao;

    @Column(name = "SECRETARIA", table = "APANEGAT", length = 60)
    @Basic
    private String secretaria;

    @Column(name = "ID_CFACLIFO_PAROQ", table = "APANEGAT")
    @Basic
    private Integer idCfaclifoParoq;

    @Column(name = "ID_CFACLIFO_COMUN", table = "APANEGAT")
    @Basic
    private Integer idCfaclifoComun;

    @Column(name = "LIVRO", table = "APANEGAT")
    @Basic
    private Integer livro;

    @Column(name = "TERMO", table = "APANEGAT")
    @Basic
    private Integer termo;

    @Column(name = "FOLHA", table = "APANEGAT")
    @Basic
    private Integer folha;

    @Column(name = "ID_APALCASA", table = "APANEGAT")
    @Basic
    private Integer idApalcasa;

    public Integer getIdApanegat() {
        return this.idApanegat;
    }

    public void setIdApanegat(Integer idApanegat) {
        this.idApanegat = idApanegat;
    }

    public Integer getIdApaparoq() {
        return this.idApaparoq;
    }

    public void setIdApaparoq(Integer idApaparoq) {
        this.idApaparoq = idApaparoq;
    }

    public Integer getIdApacomun() {
        return this.idApacomun;
    }

    public void setIdApacomun(Integer idApacomun) {
        this.idApacomun = idApacomun;
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

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAno() {
        return this.ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public int getAnofim() {
        return this.anofim;
    }

    public void setAnofim(int anofim) {
        this.anofim = anofim;
    }

    public Date getDtNascimento() {
        return this.dtNascimento;
    }

    public void setDtNascimento(Date dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public String getPai() {
        return this.pai;
    }

    public void setPai(String pai) {
        this.pai = pai;
    }

    public String getMae() {
        return this.mae;
    }

    public void setMae(String mae) {
        this.mae = mae;
    }

    public Date getEmissao() {
        return this.emissao;
    }

    public void setEmissao(Date emissao) {
        this.emissao = emissao;
    }

    public String getSecretaria() {
        return this.secretaria;
    }

    public void setSecretaria(String secretaria) {
        this.secretaria = secretaria;
    }

    public Integer getIdCfaclifoParoq() {
        return this.idCfaclifoParoq;
    }

    public void setIdCfaclifoParoq(Integer idCfaclifoParoq) {
        this.idCfaclifoParoq = idCfaclifoParoq;
    }

    public Integer getIdCfaclifoComun() {
        return this.idCfaclifoComun;
    }

    public void setIdCfaclifoComun(Integer idCfaclifoComun) {
        this.idCfaclifoComun = idCfaclifoComun;
    }

    public Integer getLivro() {
        return this.livro;
    }

    public void setLivro(Integer livro) {
        this.livro = livro;
    }

    public Integer getTermo() {
        return this.termo;
    }

    public void setTermo(Integer termo) {
        this.termo = termo;
    }

    public Integer getFolha() {
        return this.folha;
    }

    public void setFolha(Integer folha) {
        this.folha = folha;
    }

    public Integer getIdApalcasa() {
        return this.idApalcasa;
    }

    public void setIdApalcasa(Integer idApalcasa) {
        this.idApalcasa = idApalcasa;
    }

}