package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by phatnguyen on 2/10/17.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_ATTRIBUTE_DESCRIPTION")
public class AttributeDescription extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "VALUE")
    private String value;

    @Column(name = "SORT_ORDER")
    private Integer sortOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "LANGUAGE_ID")
    private Language language;

    @Embedded
    private AuditSection auditSection = new AuditSection();

    @ManyToOne
    @JoinColumn(name = "ATTRIBUTE_ID")
    private Attribute attribute;

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

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public Attribute getAttribute() {
        return attribute;
    }

    public void setAttribute(Attribute attribute) {
        this.attribute = attribute;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }
}


