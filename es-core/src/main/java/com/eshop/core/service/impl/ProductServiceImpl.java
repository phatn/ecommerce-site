package com.eshop.core.service.impl;

import com.eshop.core.dao.PriceRangeDao;
import com.eshop.core.dao.ProductDao;
import com.eshop.core.dto.ProductDto;
import com.eshop.core.mapping.MapperFactoryFacade;
import com.eshop.core.model.Product;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;
import com.eshop.core.service.ProductService;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by phatnguyen on 12/31/16.
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private PriceRangeDao priceRangeDao;

    @Transactional(readOnly = true)
    @Override
    public List<ProductDto> findNewArrivals(String languageCode) {
        return toProductDtos(productDao.getNewArrivals(languageCode),
                MapperFactoryFacade.Product.getWithDescriptions());
    }

    @Transactional(readOnly = true)
    @Override
    public Page<ProductDto> findByManufacturerInCategory(String catSefUrl, String manuSefUrl, PageRequest pageRequest,
                                                         String languageCode) {
        Page<Product> page = productDao.getByManufacturerInCategory(catSefUrl, manuSefUrl, pageRequest, languageCode);
        return new Page<>(toProductDtos(page.getContent(), MapperFactoryFacade.Product.getWithDescriptions()),
                page.getSize(), page.getTotalItems());
    }

    @Transactional(readOnly = true)
    @Override
    public Page<ProductDto> findByPriceRangeInCategory(String catSefUrl, String priceRangeName, PageRequest pageRequest,
                                                       String languageCode) {
        Page<Product> page = productDao.getByPriceRangeInCategory(catSefUrl,
                priceRangeDao.getByNameInCategory(priceRangeName, catSefUrl), pageRequest, languageCode);
        return new Page<>(toProductDtos(page.getContent(), MapperFactoryFacade.Product.getWithDescriptions()),
                page.getSize(), page.getTotalItems());
    }

    private ProductDto toProductDto(Product product, MapperFactory mapperFactory){
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(product, ProductDto.class);
    }

    private List<ProductDto> toProductDtos(List<Product> products, MapperFactory mapperFactory) {
        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product : products) {
            productDtos.add(toProductDto(product, mapperFactory));
        }

        return productDtos;
    }
}
