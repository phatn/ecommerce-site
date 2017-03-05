package com.eshop.core.dto;

/**
 * Created by phatnguyen on 3/5/17.
 */
public class LoginResult {

    private CustomerDto customer;

    private String jwtToken;

    public LoginResult(CustomerDto customer, String jwtToken) {
        this.customer = customer;
        this.jwtToken = jwtToken;
    }

    public CustomerDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
