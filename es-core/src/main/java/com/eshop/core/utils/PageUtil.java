package com.eshop.core.utils;

/**
 * Created by phatnguyen on 1/29/17.
 */
public final class PageUtil {

    private PageUtil() {}

    public static int calculateTotalPages(long totalRecords, int pageSize) {
        if(totalRecords % pageSize == 0) {
            return (int)(totalRecords / pageSize);
        } else {
            return (int)(totalRecords / pageSize) + 1;
        }
    }
}
