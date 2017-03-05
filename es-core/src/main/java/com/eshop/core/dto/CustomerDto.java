package com.eshop.core.dto;

import com.eshop.core.model.Gender;
import com.eshop.core.model.common.AuditSection;

import java.util.Date;
import java.util.List;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class CustomerDto {

    private Long id;

    private Gender gender;

    private Date dateOfBirth;

    private String email;

    private String userName;

    private String company;

    private String password;

    private String firstName;

    private String lastName;

    private String zip;

    private boolean isEnable;

    private List<CustomerRoleDto> customerRoles;

    private DeliveryDto delivery;

    private BillingDto billing;

    private AuditSection auditSection;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<CustomerRoleDto> getCustomerRoles() {
        return customerRoles;
    }

    public void setCustomerRoles(List<CustomerRoleDto> customerRoles) {
        this.customerRoles = customerRoles;
    }

    public DeliveryDto getDelivery() {
        return delivery;
    }

    public void setDelivery(DeliveryDto delivery) {
        this.delivery = delivery;
    }

    public BillingDto getBilling() {
        return billing;
    }

    public void setBilling(BillingDto billing) {
        this.billing = billing;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

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

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public boolean isEnable() {
        return isEnable;
    }

    public void setEnable(boolean enable) {
        isEnable = enable;
    }
}
