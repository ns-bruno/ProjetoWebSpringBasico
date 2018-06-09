/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.Properties;
import javax.servlet.ServletContext;
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
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Bruno
 */
@Controller
public class SisinfoWebPropertiesController extends BaseMyController{
    
    @Autowired
    ServletContext servletContext;
    
    @RequestMapping(value = {"/SisinfoWebProperties"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
        return null;
    }
    
    
    @RequestMapping(value = {"/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.GET)
    public ModelAndView init(Model model, @RequestHeader() HttpHeaders httpHeaders) {

        ModelAndView modelAndView = new ModelAndView("sisinfowebProperties");
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");
            
            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();
            
            for (Object key : prop.keySet()){
                logger.debug(prop.getProperty(key.toString()));
            }
            model.addAttribute("lista", prop);
            
        } catch (Exception e) {
            StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
            RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e);
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            model.addAttribute(STATUS_RETURN, retornoWebService);
        }
        // Cria uma vareavel para retorna o status
        // Adiciona o status
        return modelAndView;
    }
}
