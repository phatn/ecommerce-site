package com.eshop.shop.api;

import com.eshop.core.dto.CategoryDto;
import com.eshop.core.dto.CustomerDto;
import com.eshop.core.model.Customer;
import com.eshop.core.service.CustomerService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Key;
import java.util.List;

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
    public Response<String> login(@RequestBody CustomerDto customerDto) {

        CustomerDto customer = customerService.findByEmail(customerDto.getEmail());
        if(customer == null) {
            return new Response.Builder<>(Response.Status.ERROR)
                    .error(new Response.Error(1, "Login failed"))
                    .build();
        }

        Key key = MacProvider.generateKey();

        String compactJws = Jwts.builder()
                .setSubject(customer.getEmail())
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        return new Response.Builder<>(Response.Status.OK)
                .data(compactJws)
                .build();
    }
}
