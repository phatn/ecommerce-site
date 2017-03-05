package com.eshop.core.mapping;

import com.eshop.core.dto.CustomerDto;
import com.eshop.core.model.Customer;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

/**
 * Created by phatnguyen on 3/4/17.
 */
public class CustomerMapperFactory {

    private static MapperFactory mapperFactory;

    private CustomerMapperFactory() {}

    public static MapperFactory getMapperFactory() {
        if(mapperFactory == null) {
            synchronized(CategoryMapperFactory.class) {
                if(mapperFactory == null) {
                    mapperFactory = new DefaultMapperFactory.Builder().build();

                    mapperFactory.classMap(Customer.class, CustomerDto.class)
                            .exclude("customerRoles")
                            .exclude("auditSection")
                            .exclude("billing")
                            .byDefault()
                            .register();

                }
            }
        }
        return mapperFactory;
    }
}
