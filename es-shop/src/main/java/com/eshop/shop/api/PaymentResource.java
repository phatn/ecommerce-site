package com.eshop.shop.api;

import com.eshop.core.dto.ChargeInfoDto;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;


/**
 * Created by phatnguyen on 3/11/17.
 */

@RestController
@RequestMapping("/api/payments")
public class PaymentResource {

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response<Boolean> handlePayment(@RequestBody ChargeInfoDto chargeInfo) {

        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        Stripe.apiKey = "sk_test_JQ0E7Baqj7fsc2MBRZs1ApPK";

        // Token is created using Stripe.js or Checkout!
        // Get the payment token submitted by the form:

        // Charge the user's card:
        Map<String, Object> params = new HashMap<>();
        params.put("amount", chargeInfo.getAmount().longValue() * 100);
        params.put("currency", chargeInfo.getCurrency());
        params.put("description", chargeInfo.getDescription());
        params.put("source", chargeInfo.getToken());

        try {
            Charge charge = Charge.create(params);
        } catch(Exception ex) {
            return new Response.Builder<>(Response.Status.OK)
                    .data(Boolean.FALSE)
                    .build();
        }
        return new Response.Builder<>(Response.Status.OK)
                .data(Boolean.TRUE)
                .build();

    }

}
