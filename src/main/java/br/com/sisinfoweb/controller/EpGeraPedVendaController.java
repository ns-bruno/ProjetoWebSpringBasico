/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.PageBeans;
import br.com.sisinfoweb.banco.beans.PageableBeans;
import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.EpGeraPedVendaEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.EpGeraPedVendaService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
import java.util.LinkedHashMap;
import java.util.Map;
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
public class EpGeraPedVendaController extends BaseMyController{
    
    @Autowired
    EpGeraPedVendaService epGeraPedVendaService;
    
    
    @RequestMapping(value = {"/EpGeraPedVenda", "/EpGeraPedVendaController"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    @Override
    public String initJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_SORT, required = false) String sort,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery,
                            @RequestParam(name = PARAM_SIZE, required = false) Integer size,
                            @RequestParam(name = PARAM_PAGE_NUMBER, required = false) Integer pageNumber) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    @RequestMapping(value = {"/EpGeraPedVenda", "/EpGeraPedVendaController", "/EP_GERA_PED_VENDA", "/Ep_Gera_Ped_Venda"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = "nameProcedure", required = true) String nameProcedure,
                            @RequestParam(name = "idOrcam", required = true) Integer idAeaorcan,
                            @RequestParam(name = "idSeriePed", required = true) Integer idAeaserie,
                            @RequestParam(name = "dataPed", required = true) String dataPed,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_SORT, required = false) String sort,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery,
                            @RequestParam(name = PARAM_SIZE, required = false) Integer size,
                            @RequestParam(name = PARAM_PAGE_NUMBER, required = false) Integer pageNumber){
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            // Coverte o dispositivo passado no formato json em uma entidade
		SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
		epGeraPedVendaService.setSmadispoEntity(smadispoEntity);
		
		PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
													((size != null && size > 0) ? size : 0)
												  );
                // Cria um Map com LinkedHasmap para deixar os parametros ordernados
                Map<String, Object> parameter = new LinkedHashMap<String, Object>();
                parameter.put("ID_ORCAM", idAeaorcan);
                parameter.put("ID_SERIE_PED", idAeaserie);
                parameter.put("DATA_PED", dataPed);
                
		PageBeans<EpGeraPedVendaEntity> listaPage = null;
                // Checa se foi passado algum nome da procedure
                if ((nameProcedure != null) && (nameProcedure.length() > 2)){
                    // Checa se foi passado algum parametro
                    if (((idAeaorcan + idAeaserie) > 0) && (!dataPed.isEmpty()) && (dataPed.length() > 0) ){
                        listaPage = epGeraPedVendaService.storedProcedureExecuteClient(nameProcedure, parameter, pageable);

                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
                    } else {
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                        statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | O valor de algum parâmetro esta inválido, ou não foi passado nenhum parâmetro.");
                    }
                } else {
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | Nome da Procedure inválido, no mínimos tem que ter 2 caracteres.");
                }
                if (listaPage == null){
                    listaPage = new PageBeans<>(pageable, null);
                }
                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
                // Adiciona os dados que eh pra ser retornado
		retornoWebService.object = listaPage.getContent();
		retornoWebService.page = listaPage.getPageable();
                
                return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
		// Cria uma vareavel para retorna o status
		statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
		statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | " + e.getMessage());
		statusRetorno.setExtra(e.toString());
		
		// Adiciona o status
		retornoWebService.statusRetorno = statusRetorno;
		
		return new Gson().toJson(retornoWebService);
	}  catch (Exception e) {
		// Cria uma vareavel para retorna o status
		statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
		statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | " + e.getMessage());
		statusRetorno.setExtra(e.toString());
		
		// Adiciona o status
		retornoWebService.statusRetorno = statusRetorno;
		
		return new Gson().toJson(retornoWebService);
	} finally{
            epGeraPedVendaService.closeEntityManager();
        }
    }
}
