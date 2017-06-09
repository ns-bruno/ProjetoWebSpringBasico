/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Bruno
 */
public abstract class BaseMyController {
    public static final String STATUS_RETURN = "statusRetorno";
    public static final String DISPOSITIVO_JSON = "dispositivoJson";
    public static final String COLUMN_SELECTED_JSON = "columnSelectedJson";
    public static final String WHERE_JSON = "whereJson";
    public static final String SQL_JSON = "sqlJson";
    
    public abstract String initJson(    Model model, 
                                        @RequestHeader() HttpHeaders httpHeaders, 
                                        HttpServletResponse response, 
                                        @RequestParam(name = "dispositivo", required = true) String dispositivo,
                                        @RequestParam(name = "columnSelected", required = false) String columnSelected,
                                        @RequestParam(name = "where", required = false) String where,
                                        @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                                        @RequestParam(name = "sqlQuery", required = false) String sqlQuery);
}
