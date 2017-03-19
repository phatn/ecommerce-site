package com.eshop.core.service.impl;

import com.eshop.core.dto.ChargeInfoDto;
import com.eshop.core.dto.CustomerDto;
import com.eshop.core.model.Email;
import com.eshop.core.model.EmailStatus;
import com.eshop.core.model.OrderEmail;
import com.eshop.core.service.CustomerService;
import com.eshop.core.service.EmailService;
import com.eshop.core.service.PaymentService;
import com.eshop.core.service.common.ObjectMapperEx;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Service
public class PaymentServiceImpl implements PaymentService {

    private static final Logger LOG = LoggerFactory.getLogger(PaymentServiceImpl.class);

    @Autowired
    private ObjectMapperEx objectMapper;

    @Autowired
    private EmailService emailService;

    @Autowired
    private CustomerService customerService;

    @Override
    public boolean charge(ChargeInfoDto chargeInfo, String customerEmail) {
        boolean isSuccess = true;

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
            isSuccess = false;
            LOG.error("Error charging: ", ex);
        }
        if(isSuccess) {
            CustomerDto customerDto = customerService.findByEmail(customerEmail);
            Email email = new Email();
            email.setStatus(EmailStatus.NEW);
            email.setRecipient(customerDto.getEmail());
            email.setSender("myeshopvn@gmail.com");
            email.setSubject("Your order has been placed");
            email.setEmailTemplatePath("templates/email/order-confirm.vm");
            email.setFromName("EShop");
            String additionalContent = "";
            OrderEmail orderEmail = new OrderEmail(customerDto.getLastName(), "1122");
            try {
                additionalContent = objectMapper.writeValueAsString(orderEmail);
            } catch (JsonProcessingException e) {
                LOG.error("Error when serialize OrderEmail to json");
            }
            email.setAdditionalContent(additionalContent);
            emailService.create(email);
            return true;
        }
        return false;
    }
}
