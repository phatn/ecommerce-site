package com.eshop.shop.api;

import com.eshop.core.dto.CustomerDto;
import com.eshop.core.dto.LoginInput;
import com.eshop.core.dto.LoginResult;
import com.eshop.core.service.CustomerService;
import com.eshop.shop.security.SecretKey;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Key;

/**
 * Created by phatnguyen on 2/27/17.
 */

@RestController
@RequestMapping("/api/customers")
public class CustomerResource {

    @Autowired
    private CustomerService customerService;

    @Resource(name = "customerAuthenticationManager")
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Response<LoginResult> login(@RequestBody LoginInput loginInput) {

        CustomerDto customer = customerService.findByEmail(loginInput.getEmail());
        if(customer == null) {
            return new Response.Builder<>(Response.Status.ERROR)
                    .error(new Response.Error(1, "Login failed"))
                    .build();
        }

        Key key = SecretKey.getKey();

        String compactJws = Jwts.builder()
                .setSubject(customer.getEmail())
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        return new Response.Builder<>(Response.Status.OK)
                .data(new LoginResult(customer, compactJws))
                .build();
    }

    public static void main(String[] args) {
        System.out.println(MacProvider.generateKey());
    }
}
