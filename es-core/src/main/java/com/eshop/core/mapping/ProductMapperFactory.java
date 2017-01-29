package com.eshop.core.mapping;

import com.eshop.core.dto.ProductDescriptionDto;
import com.eshop.core.dto.ProductDto;
import com.eshop.core.dto.ProductImageDto;
import com.eshop.core.model.Product;
import com.eshop.core.model.ProductDescription;
import com.eshop.core.model.ProductImage;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

/**
 * Created by phatnguyen on 1/26/17.
 */
public class ProductMapperFactory {

    private static MapperFactory mapperFactoryWithDes;

    private ProductMapperFactory() {}

    public static MapperFactory getMapperFactoryWithDesc() {
        if(mapperFactoryWithDes == null) {
            synchronized (ProductMapperFactory.class) {
                if(mapperFactoryWithDes == null) {
                    mapperFactoryWithDes = new DefaultMapperFactory.Builder().build();
                    mapperFactoryWithDes.classMap(Product.class, ProductDto.class)
                            .exclude("category")
                            .exclude("attributeValues")
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
}
