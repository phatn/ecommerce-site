package com.eshop.core.mapping;

import com.eshop.core.dto.*;
import com.eshop.core.model.*;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

/**
 * Created by phatnguyen on 1/10/17.
 */
public class CategoryMapperFactory {

    private static MapperFactory mapperFactoryWithDes;

    private static MapperFactory mapperFactoryWithDescAndManu;

    private CategoryMapperFactory() {}

    public static MapperFactory getMapperFactoryWithDesc() {
        if(mapperFactoryWithDes == null) {
            synchronized(CategoryMapperFactory.class) {
                if(mapperFactoryWithDes == null) {
                    mapperFactoryWithDes = new DefaultMapperFactory.Builder().build();
                    mapperFactoryWithDes.classMap(Category.class, CategoryDto.class)
                            .exclude("categories")
                            .exclude("products")
                            .exclude("manufacturers")
                            .byDefault()
                            .register();

                    mapperFactoryWithDes.classMap(CategoryDescription.class, CategoryDescriptionDto.class)
                            .exclude("category")
                            .exclude("language")
                            .byDefault()
                            .register();

                }
            }
        }

        return mapperFactoryWithDes;
    }


    public static MapperFactory getMapperFactoryWithDescAndManu() {
        if(mapperFactoryWithDescAndManu == null) {
            synchronized(CategoryMapperFactory.class) {
                if(mapperFactoryWithDescAndManu == null) {
                    mapperFactoryWithDescAndManu = new DefaultMapperFactory.Builder().build();

                    mapperFactoryWithDescAndManu.classMap(Category.class, CategoryDto.class)
                            .exclude("categories")
                            .exclude("products")
                            .exclude("language")
                            .exclude("parent")
                            .byDefault()
                            .register();

                    mapperFactoryWithDescAndManu.classMap(PriceRange.class, PriceRangeDto.class)
                            .exclude("category")
                            .byDefault()
                            .register();

                    mapperFactoryWithDescAndManu.classMap(CategoryDescription.class, CategoryDescriptionDto.class)
                            .exclude("category")
                            .exclude("language")
                            .byDefault()
                            .register();

                    mapperFactoryWithDescAndManu.classMap(Manufacturer.class, ManufacturerDto.class)
                            .exclude("products")
                            .exclude("categories")
                            .byDefault()
                            .register();

                    mapperFactoryWithDescAndManu.classMap(ManufacturerDescription.class, ManufacturerDescriptionDto.class)
                            .exclude("language")
                            .exclude("manufacturer")
                            .byDefault()
                            .register();

                }
            }
        }

        return mapperFactoryWithDescAndManu;
    }

}
