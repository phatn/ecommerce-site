package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

import java.util.List;


/**
 * Created by phatnguyen on 12/31/16.
 */
public class CategoryDto {

    private Long id;

    private Integer sortOrder;

    private Boolean available;

    private Integer depth;

    private String code;

    private Boolean deleted;

    private CategoryDto parent;

    private List<CategoryDto> categories;

    private List<CategoryDescriptionDto> descriptions;

    private List<ProductDto> products;

    private List<ManufacturerDto> manufacturers;

    // Search engine friendly url
    private String sefUrl;

    private List<PriceRangeDto> priceRanges;

    private AuditSection auditSection;

    private String image;

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

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public Integer getDepth() {
        return depth;
    }

    public void setDepth(Integer depth) {
        this.depth = depth;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public CategoryDto getParent() {
        return parent;
    }

    public void setParent(CategoryDto parent) {
        this.parent = parent;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public String getSefUrl() {
        return sefUrl;
    }

    public void setSefUrl(String sefUrl) {
        this.sefUrl = sefUrl;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<CategoryDto> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }

    public List<CategoryDescriptionDto> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<CategoryDescriptionDto> descriptions) {
        this.descriptions = descriptions;
    }

    public List<ProductDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDto> products) {
        this.products = products;
    }

    public List<ManufacturerDto> getManufacturers() {
        return manufacturers;
    }

    public void setManufacturers(List<ManufacturerDto> manufacturers) {
        this.manufacturers = manufacturers;
    }

    public List<PriceRangeDto> getPriceRanges() {
        return priceRanges;
    }

    public void setPriceRanges(List<PriceRangeDto> priceRanges) {
        this.priceRanges = priceRanges;
    }
}
