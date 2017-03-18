package com.eshop.core.dto;

import java.math.BigDecimal;

/**
 * Created by phatnguyen on 3/18/17.
 */
public class ChargeInfoDto {

    private String token;

    private BigDecimal amount;

    private String currency;

    private String description;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
