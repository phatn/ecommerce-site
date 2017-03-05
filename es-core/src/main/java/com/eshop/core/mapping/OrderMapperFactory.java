package com.eshop.core.mapping;

import com.eshop.core.dto.CustomerDto;
import com.eshop.core.dto.OrderDto;
import com.eshop.core.model.Customer;
import com.eshop.core.model.Order;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

/**
 * Created by phatnguyen on 3/4/17.
 */
public class OrderMapperFactory {

    private static MapperFactory mapperFactoryFromOderDto;

    private static MapperFactory mapperFactoryFromOder;

    private OrderMapperFactory() {}

    public static MapperFactory getMapperFactoryFromOderDto() {
        if(mapperFactoryFromOderDto == null) {
            synchronized (OrderMapperFactory.class) {
                if(mapperFactoryFromOderDto == null) {

                    mapperFactoryFromOderDto = new DefaultMapperFactory.Builder().build();
                    mapperFactoryFromOderDto.classMap(OrderDto.class, Order.class)
                            .byDefault()
                            .register();


                }
            }
        }

        return mapperFactoryFromOderDto;
    }

    public static MapperFactory getMapperFactoryFromOder() {
        if(mapperFactoryFromOder == null) {
            synchronized (OrderMapperFactory.class) {
                if(mapperFactoryFromOder == null) {
                    mapperFactoryFromOder = new DefaultMapperFactory.Builder().build();
                    mapperFactoryFromOder.classMap(Order.class, OrderDto.class)
                            .exclude("auditSection")
                            .register();
                }
            }
        }

        return mapperFactoryFromOder;
    }
}
