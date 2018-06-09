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
import static br.com.sisinfoweb.controller.BaseMyController.logger;
import br.com.sisinfoweb.entity.CfaestadEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.CfaestadService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
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
public class CfaestadController extends BaseMyController{
    
    @Autowired
    private CfaestadService cfaestadService;
    
    @RequestMapping(value = {"/Cfaestad"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            cfaestadService.setSmadispoEntity(smadispoEntity);
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            PageBeans<CfaestadEntity> listaPage;
            
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ||
                    ((sort != null) && (!sort.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                listaPage = cfaestadService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort, pageable);
            
            } else {
                listaPage = cfaestadService.findAllClient(sort, pageable);
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = listaPage.getContent();
            retornoWebService.page = listaPage.getPageable();
            
            return new Gson().toJson(retornoWebService);
        } catch(JsonSyntaxException e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STRUCT_JSON + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            cfaestadService.closeEntityManager();
        }
    }
        
}
