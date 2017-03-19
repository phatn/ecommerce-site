package com.eshop.core.service;

import com.eshop.core.model.Email;

import java.util.List;

/**
 * Created by phatnguyen on 3/19/17.
 */
public interface EmailService {

    List<Email> getEmails();

    void update(Email email);

    void create(Email email);

}
