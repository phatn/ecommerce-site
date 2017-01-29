package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

/**
 * Created by phatnguyen on 1/7/17.
 */
public class CategoryDescriptionDto {

    private Long id;

    private String name;

    private String description;

    private LanguageDto language;

    private CategoryDto category;

    private AuditSection auditSection = new AuditSection();

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public LanguageDto getLanguage() {
        return language;
    }

    public void setLanguage(LanguageDto language) {
        this.language = language;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
