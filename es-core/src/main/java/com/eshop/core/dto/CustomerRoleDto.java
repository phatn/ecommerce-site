package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

import java.util.List;
import java.util.Set;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class CustomerRoleDto {

    private Long id;

    private String name;

    private List<CustomerDto> customers;

    private AuditSection auditSection;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CustomerDto> getCustomers() {
        return customers;
    }

    public void setCustomers(List<CustomerDto> customers) {
        this.customers = customers;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
