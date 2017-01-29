package com.eshop.core.dto;

import com.eshop.core.model.Category;
import com.eshop.core.model.common.AuditSection;

import java.math.BigDecimal;

/**
 * Created by phatnguyen on 1/12/17.
 */
public class PriceRangeDto {

    private Long id;

    private String name;

    private BigDecimal firstPrice;

    private BigDecimal secondPrice;

    private Boolean available;

    private Integer sortOrder;

    private Category category;

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

    public BigDecimal getFirstPrice() {
        return firstPrice;
    }

    public void setFirstPrice(BigDecimal firstPrice) {
        this.firstPrice = firstPrice;
    }

    public BigDecimal getSecondPrice() {
        return secondPrice;
    }

    public void setSecondPrice(BigDecimal secondPrice) {
        this.secondPrice = secondPrice;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
