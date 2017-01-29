package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

import java.util.List;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class AttributeDto {

    private Long id;

    private String name;

    private LanguageDto language;

    private Integer sortOrder;

    private List<AttributeValueDto> attributeValues;

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

    public LanguageDto getLanguage() {
        return language;
    }

    public void setLanguage(LanguageDto language) {
        this.language = language;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public List<AttributeValueDto> getAttributeValues() {
        return attributeValues;
    }

    public void setAttributeValues(List<AttributeValueDto> attributeValues) {
        this.attributeValues = attributeValues;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
