/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.AeacodstEntity;
import br.com.sisinfoweb.repository.AeacodstRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class AeacodstService extends BaseMyService<AeacodstRepository, AeacodstEntity>{
    
    public AeacodstService(AeacodstRepository smaempreRepository) {
        super(smaempreRepository);
    }
    
}