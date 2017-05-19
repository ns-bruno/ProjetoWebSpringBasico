/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.SmausuarEntity;
import br.com.sisinfoweb.repository.SmausuarRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class SmausuarService {
    
    @Autowired
    private SmausuarRepository smausuarRepository;
    
    public List<SmausuarEntity> findAll() {
        return smausuarRepository.findAll();
    }
    
    public SmausuarEntity usuar(String nome){
        return smausuarRepository.findByFirstnameEquals(nome);
    }
    
    public SmausuarEntity findByGuid(String guid){
        return smausuarRepository.findByGuidEquals(guid);
    }
}
