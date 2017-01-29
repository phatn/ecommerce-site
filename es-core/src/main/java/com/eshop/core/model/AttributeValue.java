package com.eshop.core.model;

import com.eshop.core.model.common.Auditable;
import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by phatnguyen on 10/8/16.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_ATTRIBUTE_VALUE")
public class AttributeValue extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "VALUE")
    private String value;

    @ManyToOne
    @JoinColumn(name = "ATTRIBUTE_ID")
    private Attribute attribute;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name="ES_PRODUCT_ATTRIBUTE_VALUE",
            joinColumns = {@JoinColumn(name="ATTRIBUTE_VALUE_ID")},
            inverseJoinColumns = {@JoinColumn(name = "PRODUCT_ID")})
    private Set<Product> products = new HashSet<>();

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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Attribute getAttribute() {
        return attribute;
    }

    public void setAttribute(Attribute attribute) {
        this.attribute = attribute;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
