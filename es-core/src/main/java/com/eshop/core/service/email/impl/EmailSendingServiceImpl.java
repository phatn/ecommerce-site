package com.eshop.core.service.email.impl;

import com.eshop.core.model.Email;
import com.eshop.core.model.EmailStatus;
import com.eshop.core.service.EmailService;
import com.eshop.core.service.email.EmailBuilder;
import com.eshop.core.service.email.EmailSendingService;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.velocity.app.VelocityEngine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;

import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Map;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Service("emailSendingService")
public class EmailSendingServiceImpl implements EmailSendingService {

    private static final Logger LOG = LoggerFactory.getLogger(EmailSendingServiceImpl.class);

    @Autowired
    private EmailBuilder emailBuilder;

    @Autowired
    private EmailService emailService;

    @Autowired
    JavaMailSender mailSender;

    @Autowired
    private VelocityEngine velocityEngine;;

    @Override
    public void sendEmail() {
        List<Pair<Email, Map<String, Object>>> emailModels = emailBuilder.buildEmailModels();
        for (Pair<Email, Map<String, Object>> emailModel : emailModels) {
            Email email = emailModel.getLeft();
            boolean isSuccess = true;
            try {
                mailSender.send(buildPreparator(email, emailModel.getRight()));
            } catch (MailException ex) {
                LOG.error("Error sending email, full stack trace follows: ", ex);
                isSuccess = false;
            }
            email.setStatus(isSuccess ? EmailStatus.DELIVERED : EmailStatus.FAILURE);
            emailService.update(email);
        }

    }

    private MimeMessagePreparator buildPreparator(Email email, Map<String, Object> model) {
        return new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage) throws Exception {
                MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
                message.setTo(email.getRecipient());
                message.setFrom("myeshopvn@gmail.com");
                String text = VelocityEngineUtils.mergeTemplateIntoString(
                        velocityEngine, email.getEmailTemplatePath(), "UTF-8", model);
                message.setText(text, true);
            }
        };
    }
}
