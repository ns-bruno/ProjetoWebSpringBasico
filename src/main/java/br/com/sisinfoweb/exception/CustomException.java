/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.exception;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;

/**
 *
 * @author Bruno
 */
public class CustomException extends RuntimeException{
    
    private RetornoWebServiceBeans retornoWebServiceBeans;

    public RetornoWebServiceBeans getRetornoWebServiceBeans() {
        return retornoWebServiceBeans;
    }

    public CustomException(Exception e) {
        //super(new Gson().toJson(retornoWebServiceBeans));
        super(e.getMessage());
        //this.retornoWebServiceBeans = retornoWebServiceBeans;
    }

    public CustomException() {
        super();
    }
    
}
