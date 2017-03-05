package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

/**
 * Created by phatnguyen on 1/7/17.
 */
public class OrderLineDto {

    private Long id;

    private OrderDto order;

    private ProductDto product;

    private AuditSection auditSection = new AuditSection();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderDto getOrder() {
        return order;
    }

    public void setOrder(OrderDto order) {
        this.order = order;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
