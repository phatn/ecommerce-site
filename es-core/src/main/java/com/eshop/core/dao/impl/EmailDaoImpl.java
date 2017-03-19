package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.EmailDao;
import com.eshop.core.model.Email;
import com.eshop.core.model.EmailStatus;
import org.springframework.stereotype.Repository;

import javax.persistence.LockModeType;
import java.util.Arrays;
import java.util.List;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Repository
public class EmailDaoImpl  extends AbstractDao<Email, Long> implements EmailDao {

    @Override
    public List<Email> getEmails() {

        return entityManager
                .createQuery("SELECT e from Email e where e.status NOT IN(:statuses)", Email.class)
                .setParameter("statuses", Arrays.asList(EmailStatus.DELIVERED, EmailStatus.IN_PROGRESS))
                .setLockMode(LockModeType.PESSIMISTIC_WRITE)
                .getResultList();
    }
}
