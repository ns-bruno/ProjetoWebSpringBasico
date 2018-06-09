/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    public static final String PARAM_WHERE = "where";
    public static final String PARAM_DISPOSITIVO = "dispositivo";
    public static final String PARAM_COLUMN_SELECTED = "columnSelected";
    public static final String PARAM_SORT = "sort";
    public static final String PARAM_RESUME = "resume";
    public static final String PARAM_SQL_QUERY = "sqlQuery";
    public static final String PARAM_SIZE = "size";
    public static final String PARAM_PAGE_NUMBER = "pageNumber";
    
    final static Logger logger = LoggerFactory.getLogger(Object.class);
    
    public abstract String initJson(    Model model, 
                                        @RequestHeader() HttpHeaders httpHeaders, 
                                        HttpServletResponse response, 
                                        @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                                        @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                                        @RequestParam(name = PARAM_WHERE, required = false) String where,
                                        @RequestParam(name = PARAM_SORT, required = false) String sort,
                                        @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                                        @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery,
                                        @RequestParam(name = PARAM_SIZE, required = false) Integer size,
                                        @RequestParam(name = PARAM_PAGE_NUMBER, required = false) Integer pageNumber);
    //@ModelAttribute("dispositivo")
    //public abstract void getDataConnection(@RequestParam(name = "dispositivo", required = true) String dispositivo);
}
