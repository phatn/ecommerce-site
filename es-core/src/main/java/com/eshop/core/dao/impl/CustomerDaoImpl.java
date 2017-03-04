package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.CustomerDao;
import com.eshop.core.model.Customer;
import org.springframework.stereotype.Repository;

import javax.persistence.NonUniqueResultException;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by phatnguyen on 3/4/17.
 */

@Repository
public class CustomerDaoImpl extends AbstractDao<Customer, Long> implements CustomerDao {

    @Override
    public Customer getByEmail(String email) {
        TypedQuery<Customer> query = entityManager
                .createQuery("SELECT DISTINCT c FROM Customer c WHERE c.email = :email", Customer.class)
                .setParameter("email", email);
        List<Customer> customers = query.getResultList();
        if(customers.isEmpty()) {
            return null;
        }

        if(customers.size() == 1) {
            return customers.get(0);
        }
        throw  new NonUniqueResultException();
    }

}
