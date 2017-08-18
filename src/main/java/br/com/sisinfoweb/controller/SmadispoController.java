/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.SmadispoService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Bruno
 */
@Controller
public class SmadispoController extends BaseMyController{
    
    @Autowired
    private SmadispoService smadispoService;
    
    @RequestMapping(value = {"/Smadispo"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @Override
    public String initJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = "dispositivo", required = true) String dispositivo,
                            @RequestParam(name = "columnSelected", required = false) String columnSelected,
                            @RequestParam(name = "where", required = false) String where,
                            @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = "sqlQuery", required = false) String sqlQuery) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            List<SmadispoEntity> lista;
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                lista = smadispoService.findCustomNativeQuery(resume, sqlQuery, columnSelected, where);
            
            } else {
                lista = smadispoService.findAll();
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = lista;
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
    }
    
    @RequestMapping(value = {"/Smadispo"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = "dispositivo", required = true) String dispositivo,
                            @RequestParam(name = "cnpjUrl", required = false) String cnpjUrl,
                            @RequestParam(name = "columnSelected", required = false) String columnSelected,
                            @RequestParam(name = "where", required = false) String where,
                            @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = "sqlQuery", required = false) String sqlQuery) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            
            if (smadispoService.findCustomNativeQuery(false, null, null, "IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "'").size() < 1) {
                
                String insertDispositivo = 
                          "INSERT INTO SMADISPO(ID_CFACLIFO, DESCRICAO, IDENTIFICACAO) VALUES "
                        + "((SELECT CFACLIFO.ID_CFACLIFO FROM CFACLIFO WHERE CFACLIFO.CPF_CGC = '" + cnpjUrl + "'), "
                        + "'" + smadispoEntity.getDescricao() + "', "
                        + "'" + smadispoEntity.getIdentificacao() + "'"
                        + " );";
                Integer qtdInsertDispoLicenca = (Integer) smadispoService.saveCustomNativeQuery(insertDispositivo);
                // Checa se foi inserido com sucesso
                if (qtdInsertDispoLicenca > 0){
                    insertDispositivo = 
                            "INSERT INTO SMADISPO(DESCRICAO, IDENTIFICACAO) VALUES "
                          + "(" + smadispoEntity.getDescricao() + ", "
                          + smadispoEntity.getIdentificacao()
                          + " );";
                    smadispoService.setSmadispoEntity(smadispoEntity);
                    
                    Integer qtdInsertDispo = (Integer)smadispoService.saveCustomNativeQuery(insertDispositivo);
                    
                    if (qtdInsertDispo > 0){
                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK) + "\n" + MensagemPadrao.INSERT_SUCCESS);

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;
                        // Adiciona os dados que eh pra ser retornado
                        retornoWebService.object = qtdInsertDispo;
                    } else {
                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + " - Não inseriu no banco de dados do cliente.\n" + MensagemPadrao.INSERT_ERROR);

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;
                    }
                } else {
                    // Cria uma vareavel para retorna o status
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + " - Inserindo no banco de licença.\n" + MensagemPadrao.INSERT_ERROR);

                    // Adiciona o status
                    retornoWebService.statusRetorno = statusRetorno;
                    // Adiciona os dados que eh pra ser retornado
                    retornoWebService.object = qtdInsertDispoLicenca;
                }
            } else {
                // Pega o banco de dados do cliente
                smadispoService.setSmadispoEntity(smadispoEntity);
                
                if (smadispoService.findCustomNativeQuery(false, null, null, "IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "'").size() < 1) {
                    String insertDispositivo = 
                            "INSERT INTO SMADISPO(DESCRICAO, IDENTIFICACAO) VALUES "
                          + "(" + smadispoEntity.getDescricao() + ", "
                          + smadispoEntity.getIdentificacao()
                          + " );";
                    
                    Integer qtdInsertDispo = (Integer)smadispoService.saveCustomNativeQuery(insertDispositivo);
                    
                    if (qtdInsertDispo > 0){
                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK) + "\n" + MensagemPadrao.INSERT_SUCCESS);

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;
                        // Adiciona os dados que eh pra ser retornado
                        retornoWebService.object = qtdInsertDispo;
                    } else {
                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + " - Não inseriu no banco de dados do cliente.\n" + MensagemPadrao.INSERT_ERROR);

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;
                    }
                }
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK) + "\n" + MensagemPadrao.EXISTS);
            }
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }  catch (Exception e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            smadispoService.closeEntityManager();
        }
    }
}
