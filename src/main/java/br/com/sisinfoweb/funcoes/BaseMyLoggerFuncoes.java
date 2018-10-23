/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.funcoes;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.exception.CustomException;
import br.com.sisinfoweb.repository.BaseMyRepository;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.URLDecoder;
import java.util.Properties;
import javax.servlet.ServletContext;
import javax.ws.rs.core.Context;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Bruno Nogueira Silva
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
    public static final String PROPERTIES_LOG = "LOG.";
    private SmadispoEntity smadispoEntity;
    private SmalogwsEntity smalogwsEntity;
    @Context
    private ServletContext servletContext;

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
        Boolean geraLogBanco = Boolean.FALSE;
        String levelPermitido = null;
        try{
            // Verifica se os dados do log esta vazio
            if( (smalogwsEntity != null) && (smadispoEntity != null) ){
                
                //Agora crio uma instância de FileInputStream passando via construtor o objeto file instanciado acima
                //InputStream inputStream = servletContext.getResourceAsStream("/WEB-INF/sisinfoweb.properties");
                ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
                InputStream inputStream = classLoader.getResourceAsStream("../sisinfoweb.properties");

                Properties prop = new Properties();
                //Leio o fileInputStream recuperando assim o mapa contendo chaves e valores
                prop.load(inputStream);
                
                if ( prop.containsKey(PROPERTIES_LOG + smalogwsEntity.getMetodo()) ){
                    levelPermitido = prop.getProperty(PROPERTIES_LOG + smalogwsEntity.getMetodo());
                }
                if ( (prop.containsKey(PROPERTIES_LOG + smalogwsEntity.getLevel())) || (prop.containsKey(PROPERTIES_LOG + smalogwsEntity.getLevel().replace("Service", ""))) ){
                    levelPermitido = prop.getProperty(PROPERTIES_LOG + smalogwsEntity.getLevel());
                }
                if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_ERROR)){
                    LOGGER.error(smalogwsEntity.getLog());

                } else if (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_TRACE)){
                    LOGGER.trace(smalogwsEntity.getLog());

                } else if ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DEBUG)) && (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INFO)) ){
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
                if ( (levelPermitido == null) || (levelPermitido.isEmpty()) || (levelPermitido.equalsIgnoreCase(TYPE_TRACE)) ){
                    geraLogBanco = Boolean.TRUE;
                } else if (levelPermitido != null){
                    
                    if( ( (levelPermitido.equalsIgnoreCase(TYPE_DEBUG)) || (levelPermitido.equalsIgnoreCase(TYPE_INFO) ) ) && 
                        ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DEBUG)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INFO)) ||
                        (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_WARN)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_ERROR)) ||
                        (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INSERT)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_UPDATE)) || 
                        (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DELETE)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_SELECT)) )
                        ){
                        geraLogBanco = Boolean.TRUE;

                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_WARN)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_WARN)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_ERROR)) ||
                            (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INSERT)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_UPDATE)) || 
                            (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DELETE)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_SELECT)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                    
                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_ERROR)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_ERROR)) ||
                            (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INSERT)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_UPDATE)) || 
                            (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DELETE)) || (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_SELECT)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                    
                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_INSERT)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_INSERT)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                        
                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_UPDATE)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_UPDATE)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                    
                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_DELETE)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_DELETE)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                    
                    } else if( (levelPermitido.equalsIgnoreCase(TYPE_SELECT)) && 
                            ( (smalogwsEntity.getTipo().equalsIgnoreCase(TYPE_SELECT)) )
                            ){
                        geraLogBanco = Boolean.TRUE;
                    }
                }
                // Inseri o log no banco se for altorizado o log
                if (geraLogBanco){
                    String path = this.getClass().getClassLoader().getResource("").getPath();
                    String pathArr[] = URLDecoder.decode(path, "UTF-8").split("/WEB-INF/classes/");
                    StringBuilder builder = new StringBuilder();
                    for(String s02 : pathArr) {
                        builder.append(s02);
                    }
                    String selectIdClifo = "(SELECT SMADISPO.ID_CFACLIFO FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '" + smadispoEntity.getIdentificacao() + "')";

                    sqlQuery.append("INSERT INTO SMALOGWS(ID_CFACLIFO, TIPO, ORIGEM, LEVEL, METODO, IP, LATITUDE, LONGITUDE, LOG) VALUES (");
                    sqlQuery.append(selectIdClifo).append(", "); // ID_CFACLIFO
                    sqlQuery.append("'").append(smalogwsEntity.getTipo()).append("', "); // TIPO
                    sqlQuery.append("'").append(builder.toString().substring(builder.toString().lastIndexOf("/") + 1)).append("', "); // ORIGEM
                    sqlQuery.append("'").append(smalogwsEntity.getLevel()).append("', "); // LEVEL
                    sqlQuery.append("'").append(smalogwsEntity.getMetodo()).append("', "); // METODO
                    sqlQuery.append("'").append(InetAddress.getLocalHost().getHostAddress()).append("', "); // IP
                    sqlQuery.append(0).append(", "); // LATITUDE
                    sqlQuery.append(0).append(", "); // LONGITUDE
                    sqlQuery.append("'").append(smalogwsEntity.getLog().replace("\'", "")).append("');");

                    // Inseri os dados do log no banco de dados
                    if ( ((Integer)baseMyRepository.saveCustomNativeQuery(sqlQuery.toString())) > 0){
                        LOGGER.info(MensagemPadrao.INSERT_SUCCESS + " | " + this.getClass().getSimpleName());
                    }
                }
            } else {
                LOGGER.warn(MensagemPadrao.ERROR_SMALOGWS_NULL + " | " + MensagemPadrao.ERROR_NOT_DISPOSITIVO);
            }
        } catch (IOException e){
            LOGGER.error(MensagemPadrao.ERROR_SMALOGWS_DATABASE + e.getMessage());
            
            throw new CustomException(e);
        } catch (Exception e){
            LOGGER.error(MensagemPadrao.ERROR_SMALOGWS_DATABASE + e.getMessage());
            
            throw new CustomException(e);
        }
        notify();
    }
}
