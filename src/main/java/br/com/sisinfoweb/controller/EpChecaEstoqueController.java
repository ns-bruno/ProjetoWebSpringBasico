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
import br.com.sisinfoweb.entity.EpChecaEstoqueEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.EpChecaEstoqueService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
public class EpChecaEstoqueController extends BaseMyController{
    
    @Autowired
    EpChecaEstoqueService epChecaEstoqueService;

    @RequestMapping(value = {"/EpChecaEstoqueController"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
    
    
    @RequestMapping(value = {"/EpChecaEstoque", "/EpChecaEstoqueController", "/EP_CHECA_ESTOQUE", "/Ep_Checa_Estoque"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = "nameProcedure", required = true) String nameProcedure,
                            @RequestParam(name = "idAeaestoq", required = true) Integer idAeaestoq,
                            @RequestParam(name = "idAeaunven", required = true) Integer idAeaunven,
                            @RequestParam(name = "tipo", required = true) String tipo,
                            @RequestParam(name = "quantidade", required = true) Double quantidade,
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
		epChecaEstoqueService.setSmadispoEntity(smadispoEntity);
		
		PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
													((size != null && size > 0) ? size : 0)
												  );
                Map<String, Object> parameter = new LinkedHashMap<String, Object>();
                parameter.put("ID_AEAESTOQ", idAeaestoq);
                parameter.put("ID_AEAUNVEN", idAeaunven);
                parameter.put("TIPO", tipo);
                parameter.put("QUANTIDADE", quantidade);
                
		PageBeans<EpChecaEstoqueEntity> listaPage = null;
                // Checa se foi passado algum nome da procedure
                if ((nameProcedure != null) && (nameProcedure.length() > 2)){
                    // Checa se foi passado algum parametro
                    if (((idAeaestoq + idAeaunven) > 0) && (!tipo.isEmpty()) && (tipo.length() > 0) && (quantidade != 0)){
                        listaPage = epChecaEstoqueService.storedProcedureWithSelectClient(nameProcedure, parameter, resume, sqlQuery, columnSelected, where, sort, pageable);

                        // Cria uma vareavel para retorna o status
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                        statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);
                    } else {
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                        statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | O valor de algum parâmetro esta inválido, ou não foi passado nenhum parâmetro.");
                    }
                } else {
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STORED_PROCEDURE + " | Nome da Procedure inválido.");
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
            epChecaEstoqueService.closeEntityManager();
        }
    }
}
