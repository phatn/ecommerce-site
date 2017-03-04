package com.eshop.core.service.impl;

import com.eshop.core.dao.CustomerDao;
import com.eshop.core.dto.CustomerDto;
import com.eshop.core.mapping.MapperFactoryFacade;
import com.eshop.core.model.Customer;
import com.eshop.core.service.CustomerService;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by phatnguyen on 2/26/17.
 */

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerDao customerDao;

    @Transactional(readOnly = true)
    @Override
    public CustomerDto findByEmail(String email) {
        return toCustomerDto(customerDao.getByEmail(email), MapperFactoryFacade.Customer.getMapperFactory());
    }

    private CustomerDto toCustomerDto(Customer customer, MapperFactory mapperFactory){
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(customer, CustomerDto.class);
    }
}
