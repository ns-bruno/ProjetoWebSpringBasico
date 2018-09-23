/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.funcoes;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.repository.BaseMyRepository;
import java.net.InetAddress;
import java.net.URLDecoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Bruno
 * @param <R>
 */
public class BaseMyLoggerFuncoes<R extends BaseMyRepository> implements Runnable{
    
    final static Logger LOGGER = LoggerFactory.getLogger(Object.class);
    public static final String TYPE_INSERT = "I",
                              TYPE_UPDATE = "U",
                              TYPE_DELETE = "D",
                              TYPE_SELECT = "S",
                              TYPE_INFO = "N",
                              TYPE_WARN = "W",
                              TYPE_DEBUG = "B",
                              TYPE_TRACE = "T",
                              TYPE_ERROR = "E";
    private SmadispoEntity smadispoEntity;
    private SmalogwsEntity smalogwsEntity;

    public void setSmadispoEntity(SmadispoEntity smadispoEntity) {
        this.smadispoEntity = smadispoEntity;
    }
    
    @Autowired
    private final R baseMyRepository;

    public BaseMyLoggerFuncoes(R baseMyRepository) {
        this.baseMyRepository = baseMyRepository;
        Thread thread = new Thread(this);
        thread.start();
    }
    
    public BaseMyLoggerFuncoes(R baseMyRepository, SmadispoEntity smadispoEntity, SmalogwsEntity smalogwsEntity) {
        this.baseMyRepository = baseMyRepository;
        this.smadispoEntity = smadispoEntity;
        this.smalogwsEntity = smalogwsEntity;
        new Thread(this).start();
    }

    @Override
    public void run() {
        insertLogDatabase();
    }
    
    
    
    private synchronized void insertLogDatabase(){
        StringBuilder sqlQuery = new StringBuilder();
        try{
            // Verifica se os dados do log esta vazio
            if( (smalogwsEntity != null) && (smadispoEntity != null) ){

                if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_ERROR)){
                    LOGGER.error(smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_TRACE)){
                    LOGGER.trace(smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DEBUG)){
                    LOGGER.debug(smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_WARN)){
                    LOGGER.warn(smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INSERT)){
                    LOGGER.info(" INSERT - " + smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_UPDATE)){
                    LOGGER.info(" UPDATE - " + smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DELETE)){
                    LOGGER.info(" DELETE - " + smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_SELECT)){
                    LOGGER.info(" SELECT - " + smalogwsEntity.getLog());

                } else {
                    LOGGER.info(smalogwsEntity.getLog());
                }
                String path = this.getClass().getClassLoader().getResource("").getPath();
                String pathArr[] = URLDecoder.decode(path, "UTF-8").split("/WEB-INF/classes/");
                StringBuilder builder = new StringBuilder();
                for(String s02 : pathArr) {
                    builder.append(s02);
                }
                String selectIdClifo = "(SELECT SMADISPO.ID_CFACLIFO FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "')";
                
                sqlQuery.append("INSERT INTO SMALOGWS(ID_CFACLIFO, TIPO, ORIGEM, LEVEL, IP, LATITUDE, LONGITUDE, LOG) VALUES (");
                sqlQuery.append(selectIdClifo).append(", "); // ID_CFACLIFO
                sqlQuery.append("'").append(smalogwsEntity.getTipo()).append("', "); // TIPO
                sqlQuery.append("'").append(builder.toString().substring(builder.toString().lastIndexOf("/") + 1)).append("', "); // ORIGEM
                sqlQuery.append("'").append(smalogwsEntity.getLevel()).append("', "); // LEVEL
                sqlQuery.append("'").append(InetAddress.getLocalHost().getHostAddress()).append("', "); // IP
                sqlQuery.append(0).append(", "); // LATITUDE
                sqlQuery.append(0).append(", "); // LONGITUDE
                sqlQuery.append("'").append(smalogwsEntity.getLog().replace("\'", "")).append("');");
                
                // Inseri os dados do log no banco de dados
                //baseMyRepository.saveCustomNativeQueryLogger(sqlQuery.toString());
                baseMyRepository.saveCustomNativeQuery(sqlQuery.toString());
            } else {
                LOGGER.trace(MensagemPadrao.ERROR_SMALOGWS_NULL);
            }
        } catch (Exception e){
            LOGGER.error(MensagemPadrao.ERROR_SMALOGWS_DATABASE + e.getMessage());
        }
        notify();
    }
}
