package com.eshop.core.model.common;

import java.util.List;

/**
 * Created by phatnguyen on 1/29/17.
 */
public class Page<T> {

    private List<T> content;

    /** Size of the page
     *
     * If it equals -1, show all records then
     */
    private int size = -1;

    private long totalItems;

    // The number of the current page
    private int number;

    public Page(List<T> content, int size, long totalItems) {
        this.content = content;
        this.size = size;
        this.totalItems = totalItems;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    /**
     * Returns the size of the page.
     *
     * @return the size of the page
     */
    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    /**
     * Returns the number of total pages.
     *
     * @return the number of toral pages
     */
    public long getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(long totalPages) {
        this.totalItems = totalItems;
    }
}
