package com.eshop.shop.api;

import com.eshop.core.dto.OrderDto;
import com.eshop.core.service.OrderService;
import com.eshop.shop.security.SecretKey;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Key;

/**
 * Created by phatnguyen on 3/4/17.
 */

@RestController
@RequestMapping("/api/orders")
public class OrderResource {

    @Autowired
    private OrderService orderService;



    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response<Boolean> createOrder(@RequestBody OrderDto orderDto,
                                         @RequestHeader(value = "JWT-TOKEN", required = true) String jwtToken) {

        Key key = SecretKey.getKey();
        if(Jwts.parser().setSigningKey(key).
                parseClaimsJws(jwtToken).getBody().
                getSubject().equals(orderDto.getCustomer().getEmail())) {
            orderService.insert(orderDto);
            return new Response.Builder<>(Response.Status.OK)
                    .data(Boolean.TRUE)
                    .build();
        }

        return new Response.Builder<>(Response.Status.ERROR)
                .error(new Response.Error(2, "No rights to access"))
                .build();
    }

}
