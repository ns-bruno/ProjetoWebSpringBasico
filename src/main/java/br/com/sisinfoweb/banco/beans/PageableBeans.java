/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.banco.beans;

/**
 *
 * @author Bruno
 * @param <E>
 */
public class PageableBeans<E> {
    
    private Integer totalElements,
                    totalPages,
                    size,
                    pageNumber,
                    listSize;

    public PageableBeans(Integer totalElements, Integer totalPages, Integer size, Integer pageNumber, Integer listSize) {
        this.totalElements = totalElements;
        this.totalPages = totalPages;
        this.size = size;
        this.pageNumber = pageNumber;
        this.listSize = listSize;
    }

    public PageableBeans() {
    }

    public PageableBeans(Integer pageNumber, Integer size) {
        this.pageNumber = pageNumber;
        this.size = size;
    }
    
    public Integer getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(Integer totalElements) {
        this.totalElements = totalElements;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Integer getListSize() {
        return listSize;
    }

    public void setListSize(Integer listSize) {
        this.listSize = listSize;
    }
    
    
}
