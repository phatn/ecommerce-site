package com.eshop.core.dto;

import com.eshop.core.model.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * Created by phatnguyen on 2/11/17.
 */
public class ProductRelationshipDto {

    private Long id;

    private Integer sortOrder;

    private Product relatedProduct;

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Product getRelatedProduct() {
        return relatedProduct;
    }

    public void setRelatedProduct(Product relatedProduct) {
        this.relatedProduct = relatedProduct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
