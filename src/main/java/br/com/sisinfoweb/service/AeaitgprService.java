/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.AeaitgprEntity;
import br.com.sisinfoweb.repository.AeaitgprRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno Nogueira Silva
 */
@Service
@Transactional
public class AeaitgprService extends BaseMyService<AeaitgprRepository, AeaitgprEntity>{

    public AeaitgprService(AeaitgprRepository aeaitgprRepository){
        super(aeaitgprRepository);
    }
    
    
}
