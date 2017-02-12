package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by phatnguyen on 2/11/17.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_PRODUCT_RELATIONSHIP")
public class ProductRelationship extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SORT_ORDER")
    private Integer sortOrder;

    @Embedded
    private AuditSection auditSection = new AuditSection();

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "RELATED_PRODUCT_ID")
    private Product relatedProduct;

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

    @Override
    public AuditSection getAuditSection() {
        return auditSection;
    }

    @Override
    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Product getRelatedProduct() {
        return relatedProduct;
    }

    public void setRelatedProduct(Product relatedProduct) {
        this.relatedProduct = relatedProduct;
    }
}
