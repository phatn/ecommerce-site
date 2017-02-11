package com.eshop.core.mapping;

import com.eshop.core.dto.*;
import com.eshop.core.model.*;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import ma.glasnost.orika.unenhance.HibernateUnenhanceStrategy;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class ProductMapperFactory {

    private static MapperFactory mapperFactoryWithDes;

    private static MapperFactory mapperFactoryWithDetail;

    private ProductMapperFactory() {}

    public static MapperFactory getMapperFactoryWithDesc() {
        if(mapperFactoryWithDes == null) {
            synchronized (ProductMapperFactory.class) {
                if(mapperFactoryWithDes == null) {
                    mapperFactoryWithDes = new DefaultMapperFactory.Builder().build();
                    mapperFactoryWithDes.classMap(Product.class, ProductDto.class)
                            .exclude("category")
                            .exclude("attributes")
                            .exclude("manufacturer")
                            .exclude("orderLines")
                            .byDefault()
                            .register();

                    mapperFactoryWithDes.classMap(ProductDescription.class, ProductDescriptionDto.class)
                            .exclude("product")
                            .exclude("language")
                            .byDefault()
                            .register();

                    mapperFactoryWithDes.classMap(ProductImage.class, ProductImageDto.class)
                            .exclude("product")
                            .byDefault()
                            .register();
                }
            }
        }

        return mapperFactoryWithDes;
    }

    public static MapperFactory getMapperFactoryWithDetail() {
        if(mapperFactoryWithDetail == null) {
            synchronized (ProductMapperFactory.class) {
                if(mapperFactoryWithDetail == null) {
                    mapperFactoryWithDetail = new DefaultMapperFactory.Builder().
                            unenhanceStrategy(new HibernateUnenhanceStrategy()).
                            build();

                    mapperFactoryWithDetail.classMap(Product.class, ProductDto.class)
                            .exclude("manufacturer")
                            .exclude("orderLines")
                            .byDefault()
                            .register();


                    mapperFactoryWithDetail.classMap(Attribute.class, AttributeDto.class)
                            .exclude("product")
                            .byDefault()
                            .register();

                    mapperFactoryWithDetail.classMap(AttributeDescription.class, AttributeDescriptionDto.class)
                            .exclude("language")
                            .exclude("attribute")
                            .byDefault()
                            .register();

                    mapperFactoryWithDetail.classMap(Category.class, CategoryDto.class)
                            .exclude("categories")
                            .exclude("products")
                            .exclude("manufacturers")
                            .exclude("descriptions")
                            .exclude("priceRanges")
                            .exclude("parent")
                            .byDefault()
                            .register();

                    mapperFactoryWithDetail.classMap(ProductDescription.class, ProductDescriptionDto.class)
                            .exclude("product")
                            .exclude("language")
                            .byDefault()
                            .register();

                    mapperFactoryWithDetail.classMap(ProductImage.class, ProductImageDto.class)
                            .exclude("product")
                            .byDefault()
                            .register();
                }
            }
        }

        return mapperFactoryWithDetail;
    }
}
