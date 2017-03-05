package com.eshop.core.mapping;

import ma.glasnost.orika.MapperFactory;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

/**
 * Created by phatnguyen on 1/10/17.
 */
public class MapperFactoryFacade {

    private MapperFactoryFacade() {}

    public static class Category {

        public static MapperFactory getWithDesc() {
            return CategoryMapperFactory.getMapperFactoryWithDesc();
        }

        public static MapperFactory getWithDescAndManu() {
            return CategoryMapperFactory.getMapperFactoryWithDescAndManu();
        }
    }

    public static class Product {

        public static MapperFactory getWithDescriptions() {
            return ProductMapperFactory.getMapperFactoryWithDesc();
        }

        public static MapperFactory getWithDetail() {
            return ProductMapperFactory.getMapperFactoryWithDetail();
        }

        public static MapperFactory getWithDescAndManufacturers() {
            throw new NotImplementedException();
        }

    }

    public static class Customer {

        public static MapperFactory getMapperFactory() {
            return CustomerMapperFactory.getMapperFactory();
        }

    }

    public static class Order {

        public static MapperFactory getMapperFactoryFromOrderDto() {
            return OrderMapperFactory.getMapperFactoryFromOderDto();
        }

        public static MapperFactory getMapperFactoryFromOrder() {
            return OrderMapperFactory.getMapperFactoryFromOder();
        }
    }
}
