package com.eshop.core.model.common;

/**
 * Created by phatnguyen on 10/8/16.
 */
public interface Auditable {

    AuditSection getAuditSection();

    void setAuditSection(AuditSection auditSection);
}
