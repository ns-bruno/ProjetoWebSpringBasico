/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.banco.beans;

import java.io.Serializable;

/**
 *
 * @author Bruno
 * @param <T>
 */
public class RetornoWebServiceBeans<T> implements Serializable{
    
    public StatusRetornoWebServiceBeans statusRetorno;
    public T object;
    public PageableBeans<T> page;
}
