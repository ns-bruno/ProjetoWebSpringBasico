/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.service;

import br.com.sisinfoweb.entity.SmaempreEntity;
import br.com.sisinfoweb.repository.SmaempreRepository;
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
public class SmaempreService {

    @Autowired
    private SmaempreRepository smaempreRepository;

    public List<SmaempreEntity> findAll() {
        return smaempreRepository.findAll();
    }
}
