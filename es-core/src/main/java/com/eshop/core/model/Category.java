package com.eshop.core.model;

/**
 * Created by phatnguyen on 10/8/16.
 */

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;
import com.google.common.base.Objects;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_CATEGORY")
public class Category extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SORT_ORDER")
    private Integer sortOrder = 0;

    @Column(name = "AVAILABLE")
    private Boolean available;

    @Column(name = "DEPTH")
    private Integer depth;

    @Column(name = "CODE", length = 100)
    private String code;

    @Column(name = "IS_DELETED")
    private Boolean deleted = Boolean.FALSE;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_ID")
    private Category parent;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Category> categories = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "category")
    private Set<CategoryDescription> descriptions = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "category")
    private Set<PriceRange> priceRanges = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category")
    private Set<Product> products = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="ES_CATEGORY_MANUFACTURER",
            joinColumns=@JoinColumn(name="CATEGORY_ID", referencedColumnName="ID"),
            inverseJoinColumns=@JoinColumn(name="MANUFACTURER_ID", referencedColumnName="ID"))
    private Set<Manufacturer> manufacturers = new HashSet<>();

    // Search engine friendly url
    @Column(name = "SEF_URL", length = 120)
    private String sefUrl;

    @Column(name = "IMAGE")
    private String image;

    @Embedded
    private AuditSection auditSection = new AuditSection();

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

    public Category getParent() {
        return parent;
    }

    public void setParent(Category parent) {
        this.parent = parent;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public Set<CategoryDescription> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(Set<CategoryDescription> descriptions) {
        this.descriptions = descriptions;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    public Set<Manufacturer> getManufacturers() {
        return manufacturers;
    }

    public void setManufacturers(Set<Manufacturer> manufacturers) {
        this.manufacturers = manufacturers;
    }

    public String getSefUrl() {
        return sefUrl;
    }

    public void setSefUrl(String sefUrl) {
        this.sefUrl = sefUrl;
    }

    public Set<PriceRange> getPriceRanges() {
        return priceRanges;
    }

    public void setPriceRanges(Set<PriceRange> priceRanges) {
        this.priceRanges = priceRanges;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) {
            return false;
        }
        if (getClass() != o.getClass()) {
            return false;
        }
        final Category other = (Category) o;
        return Objects.equal(this.id, other.id) && Objects.equal(this.sortOrder, other.sortOrder)
                && Objects.equal(this.available, other.available)
                && Objects.equal(this.image, other.image);

    }

    @Override
    public int hashCode() {
        return Objects.hashCode(this.id, this.sortOrder, this.available, this.image);
    }
}
