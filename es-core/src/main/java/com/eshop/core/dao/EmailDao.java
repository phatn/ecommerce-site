package com.eshop.core.dao;

import com.eshop.core.model.Email;

import java.util.List;

/**
 * Created by phatnguyen on 3/19/17.
 */
public interface EmailDao {

    List<Email> getEmails();

    void update(Email email);

    void create(Email email);
}
