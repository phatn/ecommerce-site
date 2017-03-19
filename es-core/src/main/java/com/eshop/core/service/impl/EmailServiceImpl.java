package com.eshop.core.service.impl;

import com.eshop.core.dao.EmailDao;
import com.eshop.core.model.Email;
import com.eshop.core.model.EmailStatus;
import com.eshop.core.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private EmailDao emailDao;

    @Transactional(propagation = Propagation.REQUIRES_NEW, isolation = Isolation.READ_COMMITTED)
    @Override
    public List<Email> getEmails() {
        List<Email> emails = emailDao.getEmails();
        if(emails != null && !emails.isEmpty()) {
            emails.forEach(email -> email.setStatus(EmailStatus.DELIVERED.IN_PROGRESS));
        }
        return emails;
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void update(Email email) {
        emailDao.update(email);

    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void create(Email email) {
        emailDao.create(email);
    }
}
