/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.interceptor;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.CfaclifoService;
import br.com.sisinfoweb.service.SmadispoService;
import com.google.gson.Gson;
import java.net.HttpURLConnection;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 *
 * @author Bruno
 */
public class AutorizadorInterceptor extends HandlerInterceptorAdapter {

    final static Logger logger = LoggerFactory.getLogger(Object.class);
    public static final String KEY_DISPOSITIVO = "keyDispositivo";
    public static final String KEY_DISPOSITIVO_JSON = "dispositivo";
    public static final String KEY_CNPJ_URL = "cnpjUrl";

    private static final String[] PAGINA_SEM_FILTRO_TERMINA_COM = {
        "login",
        "Login",
        "home",
        "index"};

    private static final String[] PAGINA_SEM_FILTRO_CONTEM = {
        "lib"};

    @Autowired
    SmadispoService smadispoService;

    @Autowired
    CfaclifoService cfaclifoService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (isPaginaSemFiltro(request.getRequestURI())) {
            return true;
        }
        // Pega a sessao se existir
        HttpSession sessao = request.getSession(false);

        // Checa se que esta fazendo a solicitacao eh para consumir um json
        if (((request.getHeader(HttpHeaders.ACCEPT) != null) && (request.getHeader(HttpHeaders.ACCEPT).contains(MediaType.APPLICATION_JSON_VALUE)))
                || ((request.getHeader(HttpHeaders.CONTENT_TYPE) != null) && (request.getHeader(HttpHeaders.CONTENT_TYPE).contains(MediaType.APPLICATION_JSON_VALUE)))) {

            StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
            RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();

            if (request.getParameterMap() != null) {
                
                if ((request.getParameter(KEY_CNPJ_URL) != null) && (request.getMethod().equalsIgnoreCase("POST"))) {
                    String where = "(CFACLIFO.CPF_CGC = '" + request.getParameter(KEY_CNPJ_URL) + "') ";
                    if (cfaclifoService.findCustomNativeQuery(Boolean.FALSE, null, null, where, null).size() > 0) {
                        logger.info(MensagemPadrao.LOGGER_NEW_CAD_DISPOSITIVO);
                        return true;
                    }

                } else {
                    if ((request.getParameter(KEY_DISPOSITIVO_JSON) != null)) {

                        SmadispoEntity smadispoEntity = new Gson().fromJson(request.getParameter(KEY_DISPOSITIVO_JSON), SmadispoEntity.class);

                        // Checa se pegou o dispositivo
                        if ((smadispoEntity != null) && (smadispoEntity.getIdentificacao() != null) && (!smadispoEntity.getIdentificacao().isEmpty())) {

                            String whereClifo = "(CFACLIFO.ID_CFACLIFO = (SELECT SMADISPO.ID_CFACLIFO FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "'))";

                            List<CfaclifoEntity> listaClifo = cfaclifoService.findCustomNativeQuery(Boolean.FALSE, null, null, whereClifo, null);

                            // Checa se a empresa esta cadastrada no banco de dados Admin
                            if ((listaClifo != null) && (listaClifo.size() > 0)) {
                                // Checa se a empresa esta ativa
                                if (listaClifo.get(0).getAtivo().equals('1')) {
                                    // Pega a conexao com o banco de dados 
                                    
                                    String whereDispo = "(IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "') ";

                                    List<SmadispoEntity> listaDispositivo = smadispoService.findCustomNativeQuery(Boolean.FALSE, null, null, whereDispo, null);

                                    // Checa se o dispositivo esta cadastrado no Admin
                                    if ((listaDispositivo != null) && (listaDispositivo.size() > 0)) {
                                        // Checa se o dispositivo esta ativo
                                        if ( (listaDispositivo.get(0).getAtivo() != null) && (listaDispositivo.get(0).getAtivo().equals('1')) ) {

                                            return true;
                                        } else {
                                            logger.warn(MensagemPadrao.ERROR_DISPOSITIVO_INATIVO + " - " + smadispoEntity.getIdentificacao());

                                            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                                            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                                            //statusRetorno.setExtra(e.getLocalizedMessage());

                                            // Adiciona o status
                                            retornoWebService.statusRetorno = statusRetorno;

                                            StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                                            mensagem.setCodigoRetorno(0);
                                            mensagem.setMensagemRetorno(MensagemPadrao.ERROR_DISPOSITIVO_INATIVO);
                                            // Adiciona os dados que eh pra ser retornado
                                            retornoWebService.object = mensagem;
                                            
                                            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                                            response.getWriter().write(new Gson().toJson(retornoWebService));
                                            return false;
                                        }
                                    } else {
                                        logger.warn(MensagemPadrao.ERROR_DISPOSITIVO_NAO_CADASTRADO + " - " + smadispoEntity.getIdentificacao());

                                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                                        //statusRetorno.setExtra(e.getLocalizedMessage());

                                        // Adiciona o status
                                        retornoWebService.statusRetorno = statusRetorno;

                                        StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                                        mensagem.setCodigoRetorno(0);
                                        mensagem.setMensagemRetorno(MensagemPadrao.ERROR_DISPOSITIVO_NAO_CADASTRADO);
                                        // Adiciona os dados que eh pra ser retornado
                                        retornoWebService.object = mensagem;

                                        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                                        response.getWriter().write(new Gson().toJson(retornoWebService));
                                        return false;
                                    }

                                } else {
                                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                                    statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                                    //statusRetorno.setExtra(e.getLocalizedMessage());

                                    // Adiciona o status
                                    retornoWebService.statusRetorno = statusRetorno;

                                    StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                                    mensagem.setCodigoRetorno(0);
                                    mensagem.setMensagemRetorno(MensagemPadrao.ERROR_EMPRESA_INATIVA);
                                    // Adiciona os dados que eh pra ser retornado
                                    retornoWebService.object = mensagem;

                                    response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                                    response.getWriter().write(new Gson().toJson(retornoWebService));
                                    return false;
                                }
                            } else {
                                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                                statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                                //statusRetorno.setExtra(e.getLocalizedMessage());

                                // Adiciona o status
                                retornoWebService.statusRetorno = statusRetorno;

                                StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                                mensagem.setCodigoRetorno(0);
                                mensagem.setMensagemRetorno(MensagemPadrao.ERROR_EMPRESA_NAO_LICENCIADA);
                                // Adiciona os dados que eh pra ser retornado
                                retornoWebService.object = mensagem;
                                
                                response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                                response.getWriter().write(new Gson().toJson(retornoWebService));
                                return false;
                            }

                        } else {
                            logger.warn(MensagemPadrao.ERROR_NOT_DISPOSITIVO);

                            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                            //statusRetorno.setExtra(e.getLocalizedMessage());

                            // Adiciona o status
                            retornoWebService.statusRetorno = statusRetorno;

                            StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                            mensagem.setCodigoRetorno(0);
                            mensagem.setMensagemRetorno(MensagemPadrao.ERROR_DISPOSITIVO_SEM_UUID);
                            // Adiciona os dados que eh pra ser retornado
                            retornoWebService.object = mensagem;

                            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                            response.getWriter().write(new Gson().toJson(retornoWebService));
                            return false;
                        }
                    } else {
                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.UNAUTHORIZED));
                        //statusRetorno.setExtra(e.getLocalizedMessage());

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;

                        StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                        mensagem.setCodigoRetorno(0);
                        mensagem.setMensagemRetorno(MensagemPadrao.ERROR_NOT_DISPOSITIVO);
                        // Adiciona os dados que eh pra ser retornado
                        retornoWebService.object = mensagem;

                        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                        response.getWriter().write(new Gson().toJson(retornoWebService));
                        return false;
                    }
                }
            }

        } else {
            if ((sessao != null) && (sessao.getAttribute(KEY_DISPOSITIVO) != null)) {
                return true;
            }
        }

        response.sendRedirect("Login");
        return false;
        //return super.preHandle(request, response, handler); //To change body of generated methods, choose Tools | Templates.
    }

    /**
     * Checa se a uri passada por parametro faz parte de uma lista que nao
     * precisa passar pelo filtro.
     *
     * @param url
     * @return
     */
    private boolean isPaginaSemFiltro(String url) {

        for (String pagina : PAGINA_SEM_FILTRO_TERMINA_COM) {

            if (url.toLowerCase().endsWith(pagina.toLowerCase())) {
                return true;
            }
        }

        for (String pagina : PAGINA_SEM_FILTRO_CONTEM) {

            if (url.toLowerCase().contains(pagina.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}
