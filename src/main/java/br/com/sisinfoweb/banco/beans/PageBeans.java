/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.banco.beans;

import java.util.List;

/**
 *
 * @author Bruno
 * @param <E>
 */
public class PageBeans<E> {
    
    private PageableBeans<E> pageable;
    private List<E> content;

    public PageBeans(PageableBeans<E> pageable, List<E> content) {
        this.pageable = pageable;
        this.content = content;
        if ( (content != null) && (content.size() > 0) && (pageable != null) ){
            this.pageable.setListSize(content.size());
        } else {
            this.pageable.setListSize(0);
        }
    }

    public PageableBeans<E> getPageable() {
        return pageable;
    }

    public void setPageable(PageableBeans<E> pageable) {
        this.pageable = pageable;
    }

    public List<E> getContent() {
        return content;
    }

    public void setContent(List<E> content) {
        this.content = content;
    }
    
    
}
