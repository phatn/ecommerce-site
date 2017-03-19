package com.eshop.shop.api;

import com.eshop.core.dto.ChargeInfoDto;
import com.eshop.core.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by phatnguyen on 3/11/17.
 */

@RestController
@RequestMapping("/api/payments")
public class PaymentResource {

    @Autowired
    private PaymentService paymentService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response<Boolean> handlePayment(@RequestBody ChargeInfoDto chargeInfo) {

        String customerEmail = "phatnguyen@outlook.com";

        return new Response.Builder<>(Response.Status.OK)
                    .data(paymentService.charge(chargeInfo, customerEmail))
                    .build();

    }

}
