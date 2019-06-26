/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.repository.SmalogwsRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno Nogueira Silva
 */
@Service
@Transactional
public class SmalogwsService extends BaseMyService<SmalogwsRepository, SmalogwsEntity>{
    
    public SmalogwsService(SmalogwsRepository smalogwsRepository) {
        super(smalogwsRepository);
    }
    
    
}
