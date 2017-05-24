/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.interceptor;

import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.CfaclifoService;
import br.com.sisinfoweb.service.SmausuarService;
import com.google.gson.Gson;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 *
 * @author Bruno
 */
public class AutorizadorInterceptor extends HandlerInterceptorAdapter {

    public static final String KEY_DISPOSITIVO = "keyDispositivo";
    public static final String KEY_DISPOSITIVO_JSON = "dispositivo";
    
    private static final String[] PAGINA_SEM_FILTRO_TERMINA_COM = {
        "login",
        "Login",
        "home",
        "index"};

    private static final String[] PAGINA_SEM_FILTRO_CONTEM = {
        "lib"};
    
    @Autowired
    SmausuarService smausuarService;
    
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
        if( ((request.getHeader(HttpHeaders.ACCEPT) != null) && (request.getHeader(HttpHeaders.ACCEPT).contains(MediaType.APPLICATION_JSON_VALUE))) || 
                ((request.getHeader(HttpHeaders.CONTENT_TYPE) != null) && (request.getHeader(HttpHeaders.CONTENT_TYPE).contains(MediaType.APPLICATION_JSON_VALUE))) ){
            
            if( (request.getParameterMap() != null) && (request.getParameter(KEY_DISPOSITIVO_JSON) != null) ){
        
                //String s1 = request.getParameter(KEY_DISPOSITIVO_JSON);
                
                SmadispoEntity smadispoEntity = new Gson().fromJson(request.getParameter(KEY_DISPOSITIVO_JSON), SmadispoEntity.class);
                
                // Checa se pegou o dispositivo
                if ( (smadispoEntity != null) && (smadispoEntity.getGuidClifo() != null) && (!smadispoEntity.getGuidClifo().isEmpty()) ){
                    // Pega os dados do clifo
                    CfaclifoEntity cfaclifoEntity = cfaclifoService.findResumeByGuidEquals(smadispoEntity.getGuidClifo());
                    
                    // Checa se retornou o usuario e se ele esta ativo
                    if((cfaclifoEntity != null) && (cfaclifoEntity.getAtivo().equals('1'))){
                        return true;
                    }
                }
            }
            
            
        } else {
            if ( (sessao != null) && (sessao.getAttribute(KEY_DISPOSITIVO) != null)){
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
