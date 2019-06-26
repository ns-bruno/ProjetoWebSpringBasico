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
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_COLUMN_SELECTED;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_DISPOSITIVO;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_RESUME;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SQL_QUERY;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_WHERE;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.service.SmalogwsService;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Nogueira
 */
@Controller
public class SmalogwsController extends BaseMyController{
    
    @Autowired
    private SmalogwsService smalogwsService;
    
    @RequestMapping(value = {"/Smalogws"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
            smalogwsService.setSmadispoEntity(smadispoEntity);
            
            PageBeans<SmalogwsEntity> listaPage = null;
            
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ||
                    ((sort != null) && (!sort.isEmpty())) ){
                
                listaPage = smalogwsService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort, pageable);
            
            } else {
                listaPage = smalogwsService.findAllClient(sort, pageable);
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
            smalogwsService.closeDatabase();
        }
    }
    
    @RequestMapping(value = {"/Smalogws"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestBody String smalogwsJson,
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume) {
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            smalogwsService.setSmadispoEntity(smadispoEntity);
            
            SmalogwsEntity smalogwsBody = new Gson().fromJson(smalogwsJson, SmalogwsEntity.class);
            // Retorna o id que foi inserido no banco
            Integer idInsert = (Integer) smalogwsService.saveClient(smalogwsBody);
            
            if (idInsert > 0){
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_SUCCESS);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
                
                PageBeans<SmalogwsEntity> listaPage = null;
            
                // Sala o nome da tabela que queremos buscar no banco de dados
                String nameTable = this.getClass().getSimpleName().toUpperCase().replace("CONTROLLER", "").replace("CUSTOM", "");
                // Vai busca o item inserido
                listaPage = smalogwsService.findCustomNativeQueryClient(resume, null, columnSelected, "ID_" + nameTable + " = " + idInsert, null, null);
            
                // Adiciona os dados que eh pra ser retornado
                retornoWebService.object = listaPage.getContent();
                retornoWebService.page = listaPage.getPageable();
            } else {
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_ERROR + "\n" + "Log para webservice.");
                statusRetorno.setExtra(smalogwsJson);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
                // Adiciona os dados que eh pra ser retornado
                retornoWebService.object = idInsert;
            }
            
            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }  catch (Exception e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            smalogwsService.closeDatabase();
        }
    }
}
