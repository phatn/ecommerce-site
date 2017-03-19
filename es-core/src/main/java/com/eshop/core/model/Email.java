package com.eshop.core.model;

import com.eshop.core.model.common.AuditListener;
import com.eshop.core.model.common.AuditSection;
import com.eshop.core.model.common.Auditable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Entity
@EntityListeners(value = AuditListener.class)
@Table(name = "ES_EMAIL")
public class Email extends GenericEntity implements Auditable, Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "SENDER")
    private String sender;

    @Column(name = "RECIPIENT")
    private String recipient;

    @Column(name = "STATUS")
    @Enumerated(EnumType.STRING)
    private EmailStatus status;

    @Column(name = "FROM_NAME")
    private String fromName;

    @Column(name = "EMAIL_TEMPLATE_PATH")
    private String emailTemplatePath;

    @Column(name = "ADDITIONAL_CONTENT", columnDefinition = "TEXT")
    private String additionalContent;

    @Embedded
    private AuditSection auditSection = new AuditSection();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public EmailStatus getStatus() {
        return status;
    }

    public void setStatus(EmailStatus status) {
        this.status = status;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getEmailTemplatePath() {
        return emailTemplatePath;
    }

    public void setEmailTemplatePath(String emailTemplatePath) {
        this.emailTemplatePath = emailTemplatePath;
    }

    public String getAdditionalContent() {
        return additionalContent;
    }

    public void setAdditionalContent(String additionalContent) {
        this.additionalContent = additionalContent;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }
}
