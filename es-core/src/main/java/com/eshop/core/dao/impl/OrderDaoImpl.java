package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.OrderDao;
import com.eshop.core.model.Order;
import org.springframework.stereotype.Repository;

/**
 * Created by phatnguyen on 3/4/17.
 */
@Repository
public class OrderDaoImpl extends AbstractDao<Order, Long> implements OrderDao {

}
