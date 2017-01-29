package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by phatnguyen on 10/8/16.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_MANUFACTURER")
public class Manufacturer extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "manufacturer")
    private Set<ManufacturerDescription> descriptions = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "manufacturer")
    private Set<Product> products = new HashSet<>();

    @Column(name = "SORT_ORDER")
    private Integer sortOrder = 0;

    @ManyToMany(mappedBy="manufacturers", fetch = FetchType.LAZY)
    private Set<Category> categories = new HashSet<>();

    @Column(name = "SEF_URL", unique = true, nullable = false)
    private String sefUrl;

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

    public Set<ManufacturerDescription> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(Set<ManufacturerDescription> descriptions) {
        this.descriptions = descriptions;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getSefUrl() {
        return sefUrl;
    }

    public void setSefUrl(String sefUrl) {
        this.sefUrl = sefUrl;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}
