package com.eshop.core.dao;

import com.eshop.core.model.Order;

/**
 * Created by phatnguyen on 3/4/17.
 */
public interface OrderDao {

    void create(Order order);

    Order get(Long id);

}
