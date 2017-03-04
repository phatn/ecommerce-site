package com.eshop.core.dto;

/**
 * Created by phatnguyen on 3/4/17.
 */
public class LoginInput {

    private String email;

    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
