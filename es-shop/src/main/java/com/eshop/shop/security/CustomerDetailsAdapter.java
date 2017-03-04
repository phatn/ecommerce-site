package com.eshop.shop.security;

import com.eshop.core.model.Customer;
import com.eshop.core.model.CustomerRole;
import com.eshop.core.model.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by phatnguyen on 2/26/17.
 */

public class CustomerDetailsAdapter implements UserDetails {

    private Customer customer;

    public CustomerDetailsAdapter(Customer customer) {
        this.customer = customer;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        for(CustomerRole role : customer.getCustomerRoles()) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return customer.getPassword();
    }

    @Override
    public String getUsername() {
        return customer.getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return customer.isEnable();
    }

    public String getEmail() {
        return customer.getEmail();
    }

    public Customer getCustomer() {
        return customer;
    }
}
