package com.eshop.core.model.common;

/**
 * Created by phatnguyen on 1/29/17.
 */
public class PageRequest {

    private int page;

    private int size;

    public PageRequest(int page, int size) {
        this.page = page;
        this.size = size;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
