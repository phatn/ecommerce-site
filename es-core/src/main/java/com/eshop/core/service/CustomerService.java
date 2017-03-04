package com.eshop.core.service;

import com.eshop.core.dto.CustomerDto;

/**
 * Created by phatnguyen on 2/26/17.
 */
public interface CustomerService {

    CustomerDto findByEmail(String email);
}
