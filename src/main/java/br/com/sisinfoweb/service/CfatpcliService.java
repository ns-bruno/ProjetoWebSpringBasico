/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.CfatpcliEntity;
import br.com.sisinfoweb.repository.CfatpcliRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class CfatpcliService extends BaseMyService<CfatpcliRepository, CfatpcliEntity>{
    
    public CfatpcliService(CfatpcliRepository smaempreRepository) {
        super(smaempreRepository);
    }
    
}
