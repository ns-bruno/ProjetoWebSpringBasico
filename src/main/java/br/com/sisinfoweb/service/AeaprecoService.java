/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.AeaprecoEntity;
import br.com.sisinfoweb.repository.AeaprecoRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class AeaprecoService extends BaseMyService<AeaprecoRepository, AeaprecoEntity>{
    
    public AeaprecoService(AeaprecoRepository smaempreRepository) {
        super(smaempreRepository);
    }
    
}
