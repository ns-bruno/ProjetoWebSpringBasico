/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.banco.beans;

import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.configuracao.ConfiguracoesGerais;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import java.io.UnsupportedEncodingException;
import org.apache.commons.dbcp2.BasicDataSource;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Bruno
 */
public class MyBaseBasicDataSource extends BasicDataSource{

    final static org.slf4j.Logger logger = LoggerFactory.getLogger(Object.class);
    
    @Override
    public void setPassword(String password) {
        try {
            byte[] senha = new FuncoesPersonalizadas().encryptDecrypt(FuncoesPersonalizadas.KEY_DECRYPT, password, ConfiguracoesGerais.CHAVE_DEFAULT_ENCRYPT_DECRYPT);

            if ((senha != null) ){
                String passwordDecrypt = new String(senha, "UTF-8");
                super.setPassword(passwordDecrypt);
            } else{
                super.setPassword(password);
            }
        } catch (UnsupportedEncodingException ex) {
            logger.error(MensagemPadrao.ERROR_ENCRYPT_DECRYPT + " | " + ex.getMessage());
        }
    }
    
    
}
