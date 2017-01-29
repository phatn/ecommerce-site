package com.eshop.core.dto;

import com.eshop.core.model.common.AuditSection;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by phatnguyen on 12/31/16.
 */
public class ProductDto {

    private Long id;

    private String sku;

    private BigDecimal price;

    private BigDecimal salePrice;

    private Boolean available;

    private Integer sortOrder;

    private Boolean deleted;

    private Boolean newArrivals;

    private AuditSection auditSection;

    private List<ProductDescriptionDto> descriptions;

    private List<ProductImageDto> productImages;

    private List<AttributeValueDto> attributeValues;

    private CategoryDto categoryDto;

    private ManufacturerDto manufacturer;

    private List<OrderLineDto> orderLines;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(BigDecimal salePrice) {
        this.salePrice = salePrice;
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

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

    public List<ProductDescriptionDto> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<ProductDescriptionDto> descriptions) {
        this.descriptions = descriptions;
    }

    public List<ProductImageDto> getProductImages() {
        return productImages;
    }

    public void setProductImages(List<ProductImageDto> productImages) {
        this.productImages = productImages;
    }

    public List<AttributeValueDto> getAttributeValues() {
        return attributeValues;
    }

    public void setAttributeValues(List<AttributeValueDto> attributeValues) {
        this.attributeValues = attributeValues;
    }

    public CategoryDto getCategoryDto() {
        return categoryDto;
    }

    public void setCategoryDto(CategoryDto categoryDto) {
        this.categoryDto = categoryDto;
    }

    public ManufacturerDto getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(ManufacturerDto manufacturer) {
        this.manufacturer = manufacturer;
    }

    public List<OrderLineDto> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<OrderLineDto> orderLines) {
        this.orderLines = orderLines;
    }

    public Boolean getNewArrivals() {
        return newArrivals;
    }

    public void setNewArrivals(Boolean newArrivals) {
        this.newArrivals = newArrivals;
    }
}
