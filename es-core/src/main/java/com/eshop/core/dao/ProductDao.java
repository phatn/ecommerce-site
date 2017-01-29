package com.eshop.core.dao;

import com.eshop.core.model.Product;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public interface ProductDao  {

    List<Product> getNewArrivals(String languageCode);

    Page<Product> getByManufacturer(long manufacturerId, PageRequest pageRequest, String languageCode);
}
