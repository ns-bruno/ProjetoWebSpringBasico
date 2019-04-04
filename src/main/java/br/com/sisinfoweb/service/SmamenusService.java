/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.SmamenusEntity;
import br.com.sisinfoweb.repository.SmamenusRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 * 15/02/2019 10:21:06
 * @author Bruno Nogueira Silva
 */
@Service
@Transactional
public class SmamenusService extends BaseMyService<SmamenusRepository, SmamenusEntity>{

    public SmamenusService(SmamenusRepository baseMyRepository) {
        super(baseMyRepository);
    }
    
}
