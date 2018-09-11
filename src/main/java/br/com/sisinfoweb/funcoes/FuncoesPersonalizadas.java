/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.funcoes;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import com.google.gson.JsonSyntaxException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
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
    private static final String SQL_TYPES =
            "TABLE, TABLESPACE, PROCEDURE, FUNCTION, TRIGGER, KEY, VIEW, MATERIALIZED VIEW, LIBRARY" +
            "DATABASE LINK, DBLINK, INDEX, CONSTRAINT, TRIGGER, USER, SCHEMA, DATABASE, PLUGGABLE DATABASE, BUCKET, " +
            "CLUSTER, COMMENT, SYNONYM, TYPE, JAVA, SESSION, ROLE, PACKAGE, PACKAGE BODY, OPERATOR" +
            "SEQUENCE, RESTORE POINT, PFILE, CLASS, CURSOR, OBJECT, RULE, USER, DATASET, DATASTORE, " +
            "COLUMN, FIELD, OPERATOR";
    
    //  (?i) - Ignora maiúsculas de minúsculas              (.*) - 0 ou mais vezes
    //  (\\b)- Inicio ou fim da palavra                     (\\s)- Possui espaço
    private static final String[] SQL_REGEXPS = {
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+(true|false)(\\s)*(.*)",
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+(\\w)(\\s)*(\\=)(\\s)*(\\w)(\\s)*(.*)",
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+(equals|not equals)(\\s)+(true|false)(\\s)*(.*)",
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(\\=)(\\s)*([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(.*)",
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(\\!\\=)(\\s)*([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(.*)",
            "(?i)(.*)(\\b)+(OR|AND)(\\s)+([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(\\<\\>)(\\s)*([0-9A-Za-z_'][0-9A-Za-z\\d_']*)(\\s)*(.*)",
            //"(?i)(.*)(\\b)+SELECT(\\b)+\\s.*(\\b)(.*)",
            "(?i)(.*)(\\b)+INSERT(\\b)+\\s.*(\\b)+INTO(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+UPDATE(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+DELETE(\\b)+\\s.*(\\b)+FROM(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+UPSERT(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+SAVEPOINT(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+CALL(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+ROLLBACK(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+KILL(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+DROP(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+CREATE(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+ALTER(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+TRUNCATE(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+LOCK(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+UNLOCK(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+RELEASE(\\b)+(\\s)*(" + SQL_TYPES.replaceAll(",", "|") + ")(\\b)+\\s.*(.*)",
            "(?i)(.*)(\\b)+DESC(\\b)+(\\w)*\\s.*(.*)",
            "(?i)(.*)(\\b)+DESCRIBE(\\b)+(\\w)*\\s.*(.*)",
            "(.*)(/\\*|\\*/|;){1,}(.*)",
            "(.*)(-){2,}(.*)",

    };

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
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O construirSelectFromParamJson. " + e.getMessage());
            return null;
        }
        return query.toString();
    }
    
    public String construirSelectStoredProcedureFromParamJson(String nameProcedure, Map<String, Object> parameter, String columns, String where, String sort) {
        StringBuilder query = new StringBuilder();
        try {
            if ((nameProcedure != null) && (!nameProcedure.isEmpty())) {
                query.append("SELECT ");
                // Checa se tem algum parametro
                if ((columns != null) && (!columns.isEmpty())) {

                    query.append(columns.replace("+", " "));

                } else {
                    query.append(" * ");
                }
                query.append(" FROM ");
                query.append(nameProcedure);
                query.append("(");
                
                if ((parameter != null) && (parameter.size() > 0)){
                    int i = 0;
                    for(String key : parameter.keySet()){
                        Object value = parameter.get(key);
                        
                        if ((value != null) && (value.toString().length() > 0)) {
                            
                            query.append((i > 0)  ? ", " : "");
                            
                            if ( ( (value.getClass().equals(String.class)) || (value.getClass().equals(CharSequence.class)) ) &&
                                   (! ( ((value.toString().contains("SELECT")) && (value.toString().contains("FROM"))) || 
                                    ((value.toString().contains("select")) && (value.toString().contains("from"))) ) )
                                ){
                                query.append("'").append(value.toString()).append("'");
                            } else {
                                query.append(value.toString());
                            }
                            i++;
                        }
                    }
                }
                query.append(")");

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
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O construirSelectFromParamJson. " + e.getMessage());
            return null;
        }
        return query.toString();
    }
    
    public String construirExecuteStoredProcedureFromParamJson(String nameProcedure, Map<String, Object> parameter) {
        StringBuilder query = new StringBuilder();
        try {
            if ((nameProcedure != null) && (!nameProcedure.isEmpty())) {
                query.append("EXECUTE PROCEDURE ");
                query.append(nameProcedure);
                query.append("(");
                
                if ((parameter != null) && (parameter.size() > 0)){
                    int i = 0;
                    for(String key : parameter.keySet()){
                        Object value = parameter.get(key);
                        
                        if ((value != null) && (value.toString().length() > 0)) {
                            
                            query.append((i > 0)  ? ", " : "");
                            
                            if ( ( (value.getClass().equals(String.class)) || (value.getClass().equals(CharSequence.class)) ) &&
                                   (! ( ((value.toString().contains("SELECT")) && (value.toString().contains("FROM"))) || 
                                    ((value.toString().contains("select")) && (value.toString().contains("from"))) ) )
                                ){
                                query.append("'").append(value.toString()).append("'");
                            } else {
                                query.append(value.toString());
                            }
                            i++;
                        }
                    }
                }
                query.append(");");
            }
        } catch (JsonSyntaxException e) {
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O construirExecuteStoredProcedureFromParamJson. " + e.getMessage());
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
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O construirSelectCountFromParamJson. " + e.getMessage());
            return null;
        }
        return query.toString();
    }
    
    public String construirSelectStoredProcedureCountFromParamJson(String nameProcedure, Map<String, Object> parameter, String where, String sort) {
        StringBuilder query = new StringBuilder();
        try {
            if ((nameProcedure != null) && (!nameProcedure.isEmpty())) {
                query.append("SELECT ");
                query.append(" COUNT(*) ");
                query.append(" FROM ");
                query.append(nameProcedure);
                query.append("(");
                
                if ((parameter != null) && (parameter.size() > 0)){
                    int i = 0;
                    for(String key : parameter.keySet()){
                        Object value = parameter.get(key);
                        
                        if ((value != null) && (value.toString().length() > 0)) {
                            
                            query.append((i > 0)  ? ", " : "");
                            
                            if ( ( (value.getClass().equals(String.class)) || (value.getClass().equals(CharSequence.class)) ) &&
                                   (! ( ((value.toString().contains("SELECT")) && (value.toString().contains("FROM"))) || 
                                    ((value.toString().contains("select")) && (value.toString().contains("from"))) ) )
                                ){
                                query.append("'").append(value.toString()).append("'");
                            } else {
                                query.append(value.toString());
                            }
                            i++;
                        }
                    }
                }
                query.append(")");

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
            logger.error(MensagemPadrao.ERROR_CONSTRUCT_SQL + " | NESTE CASO NAO FOI CONSTRUIDO O construirSelectCountFromParamJson. " + e.getMessage());
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
    
    /**
     * Determina se o valor da string fornecido é seguro para SQL-Injection.
     * <p>
     * Valor vazio é considerado seguro.
     * Isso é usado pela anotação SqlInjectionSafe.
     * @param where String para verificar se é seguro
     * @return 'true' não seguro(é um SQL Injection) e 'false' para seguro(não é um SQL Ingection)
     */
    public Boolean isSqlInjection(String where){
        // Checa se foi passado algum parametro
        if ( (where == null) || (where.length() == 0) ){
            return Boolean.FALSE;
        }
        List<Pattern> listPatterns = new ArrayList<Pattern>();
        for (String expression : SQL_REGEXPS) {
            listPatterns.add(Pattern.compile(expression, Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE));
        }
        for (Pattern pattern : listPatterns) {
            Matcher matcher = pattern.matcher(where);
            if (matcher.matches()) {
                return Boolean.TRUE;
            }
        }
        return Boolean.FALSE;
    }
}
