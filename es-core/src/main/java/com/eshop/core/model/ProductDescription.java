package com.eshop.core.model;

import com.eshop.core.model.common.Auditable;
import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by phatnguyen on 10/8/16.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_PRODUCT_DESCRIPTION")
public class ProductDescription extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name = "LANGUAGE_ID")
    private Language language;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

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

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}
