/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.RpalcparEntity;
import br.com.sisinfoweb.repository.RpalcparRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class RpalcparService extends BaseMyService<RpalcparRepository, RpalcparEntity>{
    
    public RpalcparService(RpalcparRepository rpalcparRepository) {
        super(rpalcparRepository);
    }
    
}
