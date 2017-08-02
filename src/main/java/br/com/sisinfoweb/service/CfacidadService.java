/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.CfacidadEntity;
import br.com.sisinfoweb.repository.CfacidadRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class CfacidadService extends BaseMyService<CfacidadRepository, CfacidadEntity>{
    
    public CfacidadService(CfacidadRepository smaempreRepository) {
        super(smaempreRepository);
    }
    
}
