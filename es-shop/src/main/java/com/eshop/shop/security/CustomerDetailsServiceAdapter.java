package com.eshop.shop.security;

import com.eshop.core.model.Customer;
import com.eshop.core.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Created by phatnguyen on 2/26/17.
 */

@Service("customerDetailsService")
public class CustomerDetailsServiceAdapter implements UserDetailsService {

    @Autowired
    private CustomerService customerService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customer customer = null;
        //Customer customer = customerService.getCustomerByUsername(username);
        if(customer == null) {
            throw new UsernameNotFoundException("No such user: " + username);
        } else if(customer.getCustomerRoles().isEmpty()) {
            throw new UsernameNotFoundException("User " + username + " has no authorities");
        }
        CustomerDetailsAdapter user = new CustomerDetailsAdapter(customer);
        return user;
    }
}
