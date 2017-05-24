/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.funcoes;

import br.com.sisinfoweb.controller.BaseMyController;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author Bruno
 */
public class FuncoesPersonalizadas {

    public FuncoesPersonalizadas() {
    }

    
    public Map<String, String> getHeaders(HttpServletRequest request) {
        Map<String, String> map = new HashMap<String, String>();

        Enumeration headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = (String) headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }
        return map;
    }

    public String construirSelectFromParamJson(String table, String columns, String where) {
        StringBuilder query = new StringBuilder();
        try {
            if ((table != null) && (!table.isEmpty())) {
                query.append("SELECT ");
                // Checa se tem algum parametro
                if ((columns != null) && (!columns.isEmpty())) {
                    
                    query.append(columns.replace("+", " "));
                    
                    // Transforma em um objeto o json passado por parametro
                    /*JsonObject object = new Gson().fromJson(columns, JsonObject.class);
                    // Checa se dentro o object json tem as colunas
                    if (object.has(BaseMyController.COLUMN_SELECTED_JSON)) {
                        // Adiciona as coluna na query
                    } else {
                        query.append(" * ");
                    }*/
                } else {
                    query.append(" * ");
                }
                query.append(" FROM ");
                query.append(table);
                
                if ((where != null) && (!where.isEmpty())) {
                    
                    query.append(" WHERE (").append(where.replace("+", " ")).append(")");
                    
                    // Transforma em um objeto o json passado por parametro
                    /*JsonObject object = new Gson().fromJson(columns, JsonObject.class);
                    // Checa se dentro o object json tem as colunas
                    if (object.has(BaseMyController.WHERE_JSON)) {
                        // Adiciona as coluna na query
                    }*/
                }
                query.append(";");
            }
        } catch (JsonSyntaxException e) {
            return null;
        }
        return query.toString();
    }
}
