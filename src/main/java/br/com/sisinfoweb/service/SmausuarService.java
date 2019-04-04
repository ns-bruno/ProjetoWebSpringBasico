/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.SmausuarEntity;
import br.com.sisinfoweb.repository.SmausuarRepository;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

/**
 *
 * @author Bruno
 */
@Service
@Transactional
public class SmausuarService extends BaseMyService<SmausuarRepository, SmausuarEntity>{
    
    private static final String COLUMNS_RESUME_SMAUSUAR = "ID_SMAUSUAR, ID_SMAEMPRE, ID_CFACLIFO, ID_CBANUMCX, GUID, US_CAD, DT_CAD, DT_ALT, CT_INTEG, NOME, ACESSO_TOTAL ";
    
    public SmausuarService(SmausuarRepository smaempreRepository) {
        super(smaempreRepository);
        super.COLUMNS_RESUME = COLUMNS_RESUME_SMAUSUAR;
    }
    
}
