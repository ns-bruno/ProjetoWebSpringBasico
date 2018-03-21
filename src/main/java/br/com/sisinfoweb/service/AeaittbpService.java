/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.AeaittbpEntity;
import br.com.sisinfoweb.repository.AeaittbpRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class AeaittbpService extends BaseMyService<AeaittbpRepository, AeaittbpEntity>{
    
    public AeaittbpService(AeaittbpRepository aeaittbpRepository) {
        super(aeaittbpRepository);
    }
    
}
