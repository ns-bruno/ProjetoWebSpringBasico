/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.entity.SmausuarEntity;
import br.com.sisinfoweb.interceptor.AutorizadorInterceptor;
import br.com.sisinfoweb.service.SmausuarService;
import com.google.gson.Gson;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
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
public class LoginController extends BaseMyController {
    
    @Autowired
    SmausuarService smausuarService;

    @RequestMapping(value = {"/Login", "/login"}, method = RequestMethod.GET)
    public ModelAndView init(Model model, @RequestHeader() HttpHeaders httpHeaders, @RequestParam(defaultValue = "{}", required = false) String dispositivo) {

        return new ModelAndView("login");
    }

    @RequestMapping(value = {"/Login", "/login"}, method = RequestMethod.POST)
    public ModelAndView login(
            Model model, 
            @RequestHeader() HttpHeaders httpHeaders, 
            HttpSession session,
            @ModelAttribute("usuario") String nomeUsuario,
            @ModelAttribute("senha") String senha) {
        
        ModelAndView modelAndView = new ModelAndView();
        
        SmausuarEntity smausuarEntity = smausuarService.findCustomNativeQuery(false, null, null, "(NOME = '" + nomeUsuario + "')").get(0);
        
        if((smausuarEntity != null) && (smausuarEntity.getNome() != null) && (smausuarEntity.getNome().length() > 0)){
            
            if (smausuarEntity.getSenha().equalsIgnoreCase(senha)) {
                session.setAttribute(AutorizadorInterceptor.KEY_DISPOSITIVO, smausuarEntity);
                
                modelAndView.setViewName("dashboard");
            } else {
                model.addAttribute("error", "Senha não confere com o usuário.");
            }
        } else {
            modelAndView.addObject(model);
            modelAndView.setViewName("login");
        }
        return modelAndView;
    }

    @RequestMapping("Logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:Login";
    }

    @RequestMapping(value = {"/Login"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    @Override
    public String initJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = "dispositivoJson", required = true) String dispositivoJson,
                            @RequestParam(name = "columnSelectedJson", required = false) String columnSelectedJson,
                            @RequestParam(name = "whereJson", required = false) String whereJson,
                            @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = "sqlJson", required = false) String sqlJson) {
        return new Gson().toJson("");
    }
}
