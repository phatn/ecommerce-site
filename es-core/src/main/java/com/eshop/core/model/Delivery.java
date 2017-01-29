package com.eshop.core.model;

import javax.persistence.*;

/**
 * Created by phatnguyen on 10/8/16.
 */
@Embeddable
public class Delivery {

    @Column(name = "DELIVERY_FIRST_NAME")
    private String firstName;

    @Column(name = "DELIVERY_LAST_NAME")
    private String lastName;

    @Column(name = "DELIVERY_COMPANY")
    private String company;

    @Column(name = "DELIVERY_ADDRESS")
    private String address;

    @Column(name = "DELIVERY_COMPANY_ADDRESS")
    private String companyAddress;

    @Column(name = "DELIVERY_CITY")
    private String city;

    @Column(name = "DELIVERY_PHONE")
    private String phone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DELIVERY_COUNTRY_ID")
    private Country country;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}

