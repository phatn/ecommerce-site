package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

/**
 * Created by phatnguyen on 2/11/17.
 */
public class AttributeDescriptionDto {

    private Long id;

    private String name;

    private String value;

    private Integer sortOrder;

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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

}
