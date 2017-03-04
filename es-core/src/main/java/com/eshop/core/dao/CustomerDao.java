package com.eshop.core.dao;

import com.eshop.core.model.Customer;

/**
 * Created by phatnguyen on 3/1/17.
 */
public interface CustomerDao {

    Customer getByEmail(String email);
}
