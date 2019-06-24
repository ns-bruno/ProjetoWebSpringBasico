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
import br.com.sisinfoweb.entity.CfaenderCustomEntity;
import br.com.sisinfoweb.entity.CfaenderEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.CfaenderCustomService;
import br.com.sisinfoweb.service.CfaenderService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
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
public class CfaenderController extends BaseMyController{
    
    @Autowired
    private CfaenderService cfaenderService;
    
    @Autowired
    private CfaenderCustomService cfaenderCustomService;
    
    @RequestMapping(value = {"/Cfaender"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
            cfaenderService.setSmadispoEntity(smadispoEntity);
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            PageBeans<CfaenderEntity> listaPage;
            
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ||
                    ((sort != null) && (!sort.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                listaPage = cfaenderService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort, pageable);
            
            } else {
                listaPage = cfaenderService.findAllClient(sort, pageable);
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);
            
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
            cfaenderService.closeEntityManager();
        }
    }
    
    
    @RequestMapping(value = {"/CfaenderCustom"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String initCustomJson( Model model, 
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
            cfaenderCustomService.setSmadispoEntity(smadispoEntity);
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            PageBeans<CfaenderCustomEntity> listaPage;
            
            sqlQuery =  "SELECT CFAENDER.ID_CFAENDER, CFAENDER.ID_CFAESTAD, CFAENDER.ID_CFACIDAD, \n" +
                        "CFAENDER.ID_SMAEMPRE, CFAENDER.ID_CFACLIFO, CFAENDER.DT_CAD, CFAENDER.DT_ALT, CFAENDER.TIPO, \n" +
                        "CFAENDER.GUID, CFAENDER.US_CAD, CFAENDER.CT_INTEG, \n" +
                        "CFALOGRA.CEP, CFABAIRO.DESCRICAO AS BAIRRO, CFATPLOG.SIGLA || ' ' || CFALOGRA.DESCRICAO AS LOGRADOURO, CFAENDER.NUMERO, \n" +
                        "CFAENDER.complemento, CFAENDER.EMAIL, CFAENDER.letra_cx_postal, CFAENDER.caixa_postal \n" +
                        "FROM CFAENDER \n" +
                        "LEFT OUTER JOIN CFALOGRA ON(CFAENDER.ID_CFALOGRA = CFALOGRA.ID_CFALOGRA) \n" +
                        "LEFT OUTER JOIN CFATPLOG ON(CFALOGRA.ID_CFATPLOG = CFATPLOG.ID_CFATPLOG) \n" +
                        "LEFT OUTER JOIN CFABAIRO ON(CFALOGRA.ID_CFABAIRO = CFABAIRO.ID_CFABAIRO) \n";
            // Checa se foi passado alqum parametro para filtrar
            if ( ((where != null) && (!where.isEmpty())) ){
                // Adiciona o where na estrutora do select
                sqlQuery += " WHERE ( " + where.replace("+", " ") +" )";
                
                if ( (sort != null) && (!sort.isEmpty()) ){
                    sqlQuery += " ORDER BY " + sort.replace("+", " ") +" ";
                }
                // Pesquisa de acordo com o sql passado
                listaPage = cfaenderCustomService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, null, sort, pageable);
            
            } else {
                listaPage = cfaenderCustomService.findCustomNativeQueryClient(false, sqlQuery, null, null, sort, pageable);
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = listaPage.getContent();
            retornoWebService.page = listaPage.getPageable();
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
    }
        
}
