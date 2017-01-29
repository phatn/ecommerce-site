package com.eshop.core.model.common;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by phatnguyen on 10/8/16.
 */
public class AuditListener {

    @PrePersist
    @PreUpdate
    public void onSaveOrUpdate(Object o) {
        if(o instanceof Auditable) {
            Auditable audit = (Auditable)o;
            AuditSection auditSection = audit.getAuditSection();
            auditSection.setDateModified(new Date());
            if(auditSection.getDateCreated() == null) {
                auditSection.setDateCreated(new Date());
            }
            audit.setAuditSection(auditSection);
        }
    }
}
