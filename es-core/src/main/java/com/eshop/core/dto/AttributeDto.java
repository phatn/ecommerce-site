package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

import java.util.List;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class AttributeDto {

    private Long id;

    private Integer sortOrder;

    private List<AttributeDescriptionDto> descriptions;

    private Boolean highlight;

    private AuditSection auditSection;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<AttributeDescriptionDto> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<AttributeDescriptionDto> descriptions) {
        this.descriptions = descriptions;
    }

    public Boolean getHighlight() {
        return highlight;
    }

    public void setHighlight(Boolean highlight) {
        this.highlight = highlight;
    }
}
