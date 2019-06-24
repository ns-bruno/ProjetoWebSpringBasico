/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.PageableBeans;
import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import static br.com.sisinfoweb.controller.BaseMyController.logger;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.Properties;
import javax.servlet.ServletContext;
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
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Bruno Nogueira
 */
@Controller
public class SisinfoWebPropertiesController extends BaseMyController {

    public static final String PARAM_CHAVE = "inputChave",
            PARAM_DESCRICAO_CAVE = "inputDescricaoChave",
            PARAM_DELETE_CHAVE = "deleteChave";

    @Autowired
    ServletContext servletContext;

    @RequestMapping(value = {"/PropertiesDefault"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    @Override
    public String initJson(Model model,
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

    @RequestMapping(value = {"/SisinfoWebProperties", "/Properties", "/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String getJson(Model model,
            @RequestHeader() HttpHeaders httpHeaders,
            HttpServletResponse response,
            @RequestParam(name = PARAM_PAGE_NUMBER, required = false) Integer pageNumber) {

        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");

            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();

            PageableBeans pageable = new PageableBeans(((pageNumber != null && pageNumber > 0) ? pageNumber : 0),
                    (((prop.size() > 0)) ? prop.size() : 0)
            );
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = prop;
            retornoWebService.page = pageable;

            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STRUCT_JSON + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        } catch (IOException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        }

    }

    @RequestMapping(value = {"/SisinfoWebProperties", "/Properties", "/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson(Model model,
            @RequestHeader() HttpHeaders httpHeaders,
            HttpServletResponse response,
            @RequestParam(name = "chave", required = true) String chave,
            @RequestParam(name = "descricao", required = true) String descricao) {

        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");

            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();

            // Checa se a chave passada no parametro ja existe
            if (prop.containsKey(chave)) {
                // Atualiza propriedade
                prop.replace(chave, descricao);
            } else {
                // Adiciona a nova propriedade
                prop.setProperty(chave, descricao);
            }
            // Salva todas as propriedades no arquivo
            prop.store(new FileOutputStream(servletContext.getRealPath("/WEB-INF/sisinfoweb.properties")), null);

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = prop;
            retornoWebService.page = new PageableBeans(prop.size(), 1, 1000, 0, prop.size());

            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STRUCT_JSON + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        } catch (IOException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        }
    }

    @RequestMapping(value = {"/SisinfoWebProperties", "/Properties", "/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String deleteJson(Model model,
            @RequestHeader() HttpHeaders httpHeaders,
            HttpServletResponse response,
            @RequestParam(name = "chave", required = true) String chave,
            @RequestParam(name = "descricao", required = true) String descricao) {

        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");

            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();

            if (prop.containsKey(chave)) {
                // Remove propriedade
                prop.remove(chave, descricao);
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);
            } else {
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + "\n" + MensagemPadrao.ERROR_NOT_FOUND_KEY_PROPERTIE);
            }
            // Salva todas as propriedades no arquivo
            prop.store(new FileOutputStream(servletContext.getRealPath("/WEB-INF/sisinfoweb.properties")), null);

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = prop;
            retornoWebService.page = new PageableBeans(prop.size(), 1, 1000, 0, prop.size());

            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STRUCT_JSON + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        } catch (IOException e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        }
    }

    /**
    @Deprecated
    @RequestMapping(value = {"/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.GET)
    public ModelAndView init(Model model, @RequestHeader() HttpHeaders httpHeaders) {

        ModelAndView modelAndView = new ModelAndView("jsp/sisinfowebProperties");
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");

            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();

            for (Object key : prop.keySet()) {
                logger.debug(key.toString() + " : " + prop.getProperty(key.toString()));
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
    } **/

    @RequestMapping(value = {"/Properties", "/properties"}, method = RequestMethod.GET)
    public ModelAndView initProp(Model model, @RequestHeader() HttpHeaders httpHeaders) {

        ModelAndView modelAndView = new ModelAndView("properties/properties");

        return modelAndView;
    }

    /**
    @Deprecated
    @RequestMapping(value = {"/SisInfoWeb.properties", "/SisInfoWeb.ini", "/sisinfoweb.ini", "/sisinfoweb.properties"}, method = RequestMethod.POST)
    public ModelAndView post(Model model,
            @RequestHeader() HttpHeaders httpHeaders,
            HttpServletRequest req,
            @ModelAttribute("properties") Properties properties) {

        ModelAndView modelAndView = new ModelAndView("sisinfowebProperties");
        try {
            //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
            InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");

            Properties prop = new Properties();
            //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
            prop.load(inputStream);
            //Fecho o fileInputStream
            inputStream.close();

            // Checa se tem algum parametro
            if ((req.getParameterMap().size() > 0)) {

                if (req.getParameter(PARAM_DELETE_CHAVE) != null) {
                    // Remove propriedade
                    prop.remove(req.getParameter(PARAM_DELETE_CHAVE));
                    // Salva todas as propriedades no arquivo
                    prop.store(new FileOutputStream(servletContext.getRealPath("/WEB-INF/sisinfoweb.properties")), null);
                }
                if ((req.getParameter(PARAM_CHAVE) != null) && (req.getParameter(PARAM_DESCRICAO_CAVE) != null)) {
                    // Adiciona a nova propriedade
                    prop.setProperty(req.getParameter(PARAM_CHAVE), req.getParameter(PARAM_DESCRICAO_CAVE));
                    // Salva todas as propriedades no arquivo
                    prop.store(new FileOutputStream(servletContext.getRealPath("/WEB-INF/sisinfoweb.properties")), null);
                }
                /**
                 * for (Object key : prop.keySet()){ logger.debug(key.toString()
                 * + " : " + prop.getProperty(key.toString())); }
                 *
            }
            model.addAttribute("lista", prop);

        } catch (IOException e) {
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
    } **/

    /**
    @RequestMapping(value = {"/Criptografar", "/Encrypt", "/Decrypt"}, method = RequestMethod.GET)
    public ModelAndView initCriptografar(Model model, @RequestHeader() HttpHeaders httpHeaders, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView("jsp/criptografar");
        try {
            logger.debug("Tela Criptografar");
            // Checa se tem algum parametro
            if ((req.getParameterMap().size() > 0)) {

                if (req.getParameter("selectTipo") != null) {
                    logger.info(req.getParameterMap().toString());
                    byte[] depoisEncryptDecrypt = new FuncoesPersonalizadas().encryptDecrypt(Integer.valueOf(req.getParameter("selectTipo")), req.getParameter("textTexto"), req.getParameter("textChave"));
                    if (depoisEncryptDecrypt != null) {
                        model.addAttribute("retorno", new String(depoisEncryptDecrypt, "UTF-8"));
                    }
                }
            }

        } catch (UnsupportedEncodingException e) {
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
    } **/
}
