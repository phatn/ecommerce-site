package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.Auditable;
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
@Table(name = "ES_USER_ROLE")
public class UserRole extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @ManyToMany(cascade = CascadeType.REFRESH)
    @JoinTable(name="ES_USER_ROLE_USER_PERMISSION",
            joinColumns = {@JoinColumn(name="USER_ROLE_ID")},
            inverseJoinColumns = {@JoinColumn(name = "USER_PERMISSION_ID")})
    private Set<UserPermission> userPermissions = new HashSet<>();

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

    public Set<UserPermission> getUserPermissions() {
        return userPermissions;
    }

    public void setUserPermissions(Set<UserPermission> userPermissions) {
        this.userPermissions = userPermissions;
    }
}
