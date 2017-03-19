package com.eshop.core.model;

/**
 * Created by phatnguyen on 3/19/17.
 */
public class OrderEmail {

    private String customerName;

    private String orderNumber;

    public OrderEmail(){}

    public OrderEmail(String customerName, String orderNumber) {
        this.customerName = customerName;
        this.orderNumber = orderNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }
}
