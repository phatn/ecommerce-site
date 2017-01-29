package com.eshop.core.dto;


import java.util.List;

/**
 * Created by phatnguyen on 1/7/17.
 */
public class ManufacturerDto {

    private Long id;

    private List<ManufacturerDescriptionDto> descriptions;

    private List<ProductDto> products;

    private Integer sortOrder;

    private List<CategoryDto> categories;

    private String sefUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ManufacturerDescriptionDto> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<ManufacturerDescriptionDto> descriptions) {
        this.descriptions = descriptions;
    }

    public List<ProductDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDto> products) {
        this.products = products;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public List<CategoryDto> getCategories() {
        return categories;
    }

    public String getSefUrl() {
        return sefUrl;
    }

    public void setSefUrl(String sefUrl) {
        this.sefUrl = sefUrl;
    }

    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }
}
