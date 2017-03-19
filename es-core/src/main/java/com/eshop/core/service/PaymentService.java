package com.eshop.core.service;

import com.eshop.core.dto.ChargeInfoDto;
import com.eshop.core.dto.CustomerDto;

/**
 * Created by phatnguyen on 3/19/17.
 */
public interface PaymentService {

    boolean charge(ChargeInfoDto chargeInfo, String customerEmail);
}
