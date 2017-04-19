/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Bruno
 */
@Controller
public class SmaempreController {
    
    @RequestMapping(value = {"/Empresa", "/CadastroEmpresa", "/Smpempre"}, method = RequestMethod.GET) 
    public ModelAndView indexInit(){
        return new ModelAndView("smpempre");
    }
}
