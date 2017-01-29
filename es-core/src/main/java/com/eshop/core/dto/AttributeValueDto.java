package com.eshop.core.dto;

import com.eshop.core.model.Attribute;
import com.eshop.core.model.common.AuditSection;

import java.util.List;

/**
 * Created by phatnguyen on 1/7/17.
 */
public class AttributeValueDto {

    private Long id;

    private String value;

    private AttributeDto attribute;

    private List<ProductDto> products;

    private AuditSection auditSection;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public AttributeDto getAttribute() {
        return attribute;
    }

    public void setAttribute(AttributeDto attribute) {
        this.attribute = attribute;
    }

    public List<ProductDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDto> products) {
        this.products = products;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
