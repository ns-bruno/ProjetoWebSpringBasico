/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.funcoes;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import com.google.gson.JsonSyntaxException;
import java.lang.reflect.Field;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Bruno
 */
public class FuncoesPersonalizadas {
    
    final static Logger logger = LoggerFactory.getLogger(Object.class);

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

    public String construirSelectFromParamJson(String table, String columns, String where, String sort) {
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
                // Checa se foi passado alguma ordenacao
                if ((sort != null) && (!sort.isEmpty())){
                    query.append(" ORDER BY ").append(sort.replace("+", " "));
                }
                query.append(";");
            }
        } catch (JsonSyntaxException e) {
            return null;
        }
        return query.toString();
    }
    
    public String construirSelectCountFromParamJson(String table, String where, String sort) {
        StringBuilder query = new StringBuilder();
        try {
            if ((table != null) && (!table.isEmpty())) {
                query.append("SELECT ");
                query.append(" COUNT(*) ");
                query.append(" FROM ");
                query.append(table);

                if ((where != null) && (!where.isEmpty())) {

                    query.append(" WHERE (").append(where.replace("+", " ")).append(")");
                }
                // Checa se foi passado alguma ordenacao
                if ((sort != null) && (!sort.isEmpty())){
                    query.append(" ORDER BY ").append(sort.replace("+", " "));
                }
                query.append(";");
            }
        } catch (JsonSyntaxException e) {
            return null;
        }
        return query.toString();
    }

    public String construirInsertFromEntity(Object entityClass) {
        StringBuilder sql = new StringBuilder();
        StringBuilder valuesColumns = new StringBuilder();
        String idReturn = null;
        try {
            if (entityClass.getClass().isAnnotationPresent(Entity.class)) {
                sql.append("INSERT");
                sql.append(" INTO ");
                sql.append(entityClass.getClass().getSimpleName().toUpperCase().replace("ENTITY", "").replace("CUSTOM", ""));
                sql.append("(");

                Field[] fields = entityClass.getClass().getDeclaredFields();

                int i = 0;
                for (Field field : fields) {
                    field.setAccessible(true);
                    // Checa se tem alguma anotacao de coluna de banco
                    if (field.isAnnotationPresent(Column.class)) {
                        Column column = field.getAnnotation(Column.class);
                        Object value = field.get(entityClass);
                        
                        sql.append(((i > 0) && (value != null) && (value.toString().length() > 0)) ? ", " : "");
                        sql.append(((value != null) && (value.toString().length() > 0)) ? column.name() : "");
                        
                        if ((value != null) && (value.toString().length() > 0)) {
                            
                            valuesColumns.append((i > 0)  ? ", " : "");
                            
                            if ( ( (value.getClass().equals(String.class)) || (value.getClass().equals(CharSequence.class)) ) &&
                                   (! ( ((value.toString().contains("SELECT")) && (value.toString().contains("FROM"))) || 
                                    ((value.toString().contains("select")) && (value.toString().contains("from"))) ) )
                                ){
                                valuesColumns.append("'").append(value.toString()).append("'");
                            } else {
                                valuesColumns.append(value.toString());
                            }
                            i++;
                        }
                    }
                    if( (field.isAnnotationPresent(Id.class)) && (idReturn == null) ){
                        idReturn = " RETURNING " + field.getAnnotation(Column.class).name();
                    }
                }
                sql.append(") VALUES (").append(valuesColumns.toString()).append(")");
                
                if ( (idReturn != null) && (!idReturn.isEmpty()) ){
                    sql.append(idReturn);
                }
            }
        } catch (IllegalAccessException | IllegalArgumentException | SecurityException e) {
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O INSERT DE UMA ENTITY. " + e.getMessage());
        }
        return sql.toString();
    }
}
