package com.eshop.core.model;

import com.google.common.base.Objects;
import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by phatnguyen on 10/8/16.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_PRODUCT")
public class Product extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SKU")
    private String sku;

    @Column(name = "PRICE")
    private BigDecimal price;

    @Column(name = "SALE_PRICE")
    private BigDecimal salePrice;

    @Column(name = "AVAILABLE")
    private Boolean available = Boolean.FALSE;

    @Column(name = "SORT_ORDER")
    private Integer sortOrder;

    @Column(name = "IS_DELETED")
    private Boolean deleted = Boolean.FALSE;

    @Column(name = "IS_NEW_ARRIVALS")
    private Boolean newArrivals = Boolean.FALSE;

    @Embedded
    private AuditSection auditSection = new AuditSection();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "product")
    private Set<ProductDescription> descriptions = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "product")
    private Set<ProductImage> productImages = new HashSet<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @OrderBy("sortOrder ASC")
    private Set<Attribute> attributes = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "MANUFACTURER_ID", nullable = true)
    private Manufacturer manufacturer;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product", orphanRemoval = true)
    private Set<OrderLine> orderLines = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private Set<ProductRelationship> relationships = new HashSet<>();

    // Search engine friendly url
    @Column(name = "SEF_URL", length = 120, unique = true)
    private String sefUrl;

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

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

    public Set<ProductDescription> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(Set<ProductDescription> descriptions) {
        this.descriptions = descriptions;
    }

    public Set<ProductImage> getProductImages() {
        return productImages;
    }

    public void setProductImages(Set<ProductImage> productImages) {
        this.productImages = productImages;
    }

    public Set<Attribute> getAttributes() {
        return attributes;
    }

    public void setAttributes(Set<Attribute> attributes) {
        this.attributes = attributes;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public Set<OrderLine> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(Set<OrderLine> orderLines) {
        this.orderLines = orderLines;
    }

    public String getSefUrl() {
        return sefUrl;
    }

    public void setSefUrl(String sefUrl) {
        this.sefUrl = sefUrl;
    }

    public Boolean getNewArrivals() {
        return newArrivals;
    }

    public void setNewArrivals(Boolean newArrivals) {
        this.newArrivals = newArrivals;
    }

    public Set<ProductRelationship> getRelationships() {
        return relationships;
    }

    public void setRelationships(Set<ProductRelationship> relationships) {
        this.relationships = relationships;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) {
            return false;
        }
        if (getClass() != o.getClass()) {
            return false;
        }
        final Product other = (Product) o;
        return Objects.equal(this.id, other.id) && Objects.equal(this.sortOrder, other.sortOrder)
                && Objects.equal(this.available, other.available)
                && Objects.equal(this.available, other.available);

    }

    @Override
    public int hashCode() {
        return Objects.hashCode(this.id, this.sortOrder, this.available, this.available, this.available);
    }
}
