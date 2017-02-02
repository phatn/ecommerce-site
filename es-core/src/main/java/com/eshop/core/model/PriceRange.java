package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;
import com.google.common.base.Objects;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Created by phatnguyen on 1/11/17.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_PRICE_RANGE", uniqueConstraints={@UniqueConstraint(columnNames={"id", "name"})})
public class PriceRange extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "FIRST_PRICE")
    private BigDecimal firstPrice;

    @Column(name = "SECOND_PRICE")
    private BigDecimal secondPrice;

    @Column(name = "AVAILABLE")
    private Boolean available = Boolean.FALSE;

    @Column(name = "SORT_ORDER")
    private Integer sortOrder = 0;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

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

    public BigDecimal getFirstPrice() {
        return firstPrice;
    }

    public void setFirstPrice(BigDecimal firstPrice) {
        this.firstPrice = firstPrice;
    }

    public BigDecimal getSecondPrice() {
        return secondPrice;
    }

    public void setSecondPrice(BigDecimal secondPrice) {
        this.secondPrice = secondPrice;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) {
            return false;
        }
        if (getClass() != o.getClass()) {
            return false;
        }
        final PriceRange other = (PriceRange) o;
        return Objects.equal(this.id, other.id) && Objects.equal(this.firstPrice, other.firstPrice)
                && Objects.equal(this.secondPrice, other.secondPrice)
                && Objects.equal(this.name, other.name)
                && Objects.equal(this.available, other.available);

    }

    @Override
    public int hashCode() {
        return Objects.hashCode(this.id, this.firstPrice, this.secondPrice, this.sortOrder,
                this.name, this.available);
    }
}
