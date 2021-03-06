package com.eshop.core.service.impl;

import com.eshop.core.dao.PriceRangeDao;
import com.eshop.core.dao.ProductDao;
import com.eshop.core.dto.ProductDto;
import com.eshop.core.mapping.MapperFactoryFacade;
import com.eshop.core.model.ImageSize;
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
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CopyOnWriteArraySet;

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

    @Transactional(readOnly = true)
    @Override
    public Page<ProductDto> findByCategory(String catSefUrl, PageRequest pageRequest, String languageCode) {
        Page<Product> page = productDao.getByCategory(catSefUrl, pageRequest, languageCode);
        return new Page<>(toProductDtos(page.getContent(), MapperFactoryFacade.Product.getWithDescriptions()),
                page.getSize(), page.getTotalItems());
    }

    @Transactional(readOnly = true)
    @Override
    public ProductDto findBySefUrl(String sefUrl, String languageCode) {
        Product product = productDao.getBySefUrl(sefUrl, languageCode);
        filterProductImages(product, ImageSize.BIG);
        return toProductDto(product, MapperFactoryFacade.Product.getWithDetail());
    }

    @Transactional(readOnly = true)
    @Override
    public List<ProductDto> findRelationshipsBySefUrl(String sefUrl, String languageCode) {
        List<Product> product = productDao.getRelationshipsBySefUrl(sefUrl, languageCode);
        filterProductsImages(product, ImageSize.SMALL);
        return toProductDtos(product, MapperFactoryFacade.Product.getWithDetail());
    }

    // =========================== Static utility methods =============================
    public static ProductDto toProductDto(Product product, MapperFactory mapperFactory){
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(product, ProductDto.class);
    }

    public static List<ProductDto> toProductDtos(List<Product> products, MapperFactory mapperFactory) {
        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product : products) {
            productDtos.add(toProductDto(product, mapperFactory));
        }

        return productDtos;
    }

    public static void filterProductImages(Product product, ImageSize... imageSizes) {
        if(product == null || product.getProductImages() == null) {
            return;
        }

        product.getProductImages().removeIf(item -> !Arrays.asList(imageSizes).contains(item.getImageSize()));
    }

    public static void filterProductsImages(List<Product> products, ImageSize... imageSizes) {
        if (products == null || products.isEmpty()) {
            return;
        }

        for (Product product : products) {
            filterProductImages(product, imageSizes);
        }
    }
}
