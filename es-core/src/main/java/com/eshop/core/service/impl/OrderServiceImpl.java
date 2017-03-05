package com.eshop.core.service.impl;

import com.eshop.core.dao.OrderDao;
import com.eshop.core.dto.OrderDto;
import com.eshop.core.dto.OrderLineDto;
import com.eshop.core.mapping.MapperFactoryFacade;
import com.eshop.core.model.Order;
import com.eshop.core.service.OrderService;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by phatnguyen on 3/4/17.
 */
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public void insert(OrderDto orderDto) {
        for(OrderLineDto orderLineDto : orderDto.getOrderLines()) {
            orderLineDto.setOrder(orderDto);
        }
        orderDao.create(toOrder(orderDto, MapperFactoryFacade.Order.getMapperFactoryFromOrderDto()));
    }

    private Order toOrder(OrderDto orderDto, MapperFactory mapperFactory) {
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(orderDto, Order.class);
    }

    private OrderDto toOrderDto(Order order, MapperFactory mapperFactory) {
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(order, OrderDto.class);
    }

}
