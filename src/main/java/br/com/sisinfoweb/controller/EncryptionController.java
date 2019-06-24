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
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_COLUMN_SELECTED;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_DISPOSITIVO;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_PAGE_NUMBER;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_RESUME;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SIZE;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SORT;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SQL_QUERY;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_WHERE;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import com.google.gson.Gson;
import java.net.HttpURLConnection;
import javax.servlet.http.HttpServletResponse;
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
 * Created on : 05/05/2019, 00:10:58
 *
 * @author Bruno Nogueira Silva
 */
@Controller
public class EncryptionController extends BaseMyController {

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

    @RequestMapping(value = {"/Encryption", "/Criptografar", "/Descriptografar", "/Encrypt", "/Decrypt"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson(Model model,
            @RequestHeader() HttpHeaders httpHeaders,
            HttpServletResponse response,
            @RequestParam(name = "tipo", required = true) Integer tipo,
            @RequestParam(name = "texto", required = true) String texto,
            @RequestParam(name = "chave", required = true) String chave) {

        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();

        try {
            byte[] depoisEncryptDecrypt = new FuncoesPersonalizadas().encryptDecrypt(tipo, texto, chave);
            if (depoisEncryptDecrypt != null) {
                //model.addAttribute("retorno", new String(depoisEncryptDecrypt, "UTF-8"));
                logger.info(getClass().getSimpleName() + " - Tipo: " + tipo + " - Texto: " + texto);
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
                // Adiciona os dados que eh pra ser retornado
                retornoWebService.object = depoisEncryptDecrypt;
                retornoWebService.page = new PageableBeans(1, 1, 1000, 0, 1);
            } else {
                logger.warn(MensagemPadrao.ERROR_ENCRYPT_DECRYPT);

                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_ENCRYPT_DECRYPT);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
            }
            return new Gson().toJson(retornoWebService);
        } catch (Exception e) {
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());

            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_ENCRYPT_DECRYPT + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());

            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;

            return new Gson().toJson(retornoWebService);
        }
    }

    @RequestMapping(value = {"/Encryption", "/Criptografar", "/Descriptografar", "/Encrypt", "/Decrypt"}, method = RequestMethod.GET)
    public ModelAndView initProp(Model model, @RequestHeader() HttpHeaders httpHeaders) {

        ModelAndView modelAndView = new ModelAndView("encryption/encryption");

        return modelAndView;
    }
}
