/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.exception.CustomException;
import java.sql.SQLException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author Bruno
 */
@EnableWebMvc
@ControllerAdvice
public class ExceptionCustomController extends ResponseEntityExceptionHandler{
    
    @ExceptionHandler({CustomException.class, Exception.class, ClassNotFoundException.class, SQLException.class})
    public ResponseEntity<RetornoWebServiceBeans> handleException(Exception retorno){

        RetornoWebServiceBeans retornoWebServiceBeans = new RetornoWebServiceBeans();
        retornoWebServiceBeans.object = retorno.getMessage();
        
        return new ResponseEntity<RetornoWebServiceBeans>(retornoWebServiceBeans, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
