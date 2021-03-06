package com.eshop.core.dao;

import com.eshop.core.model.PriceRange;
import com.eshop.core.model.Product;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;

import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public interface ProductDao  {

    Product getBySefUrl(String sefUrl, String languageCode);

    List<Product> getRelationshipsBySefUrl(String sefUrl, String languageCode);

    List<Product> getNewArrivals(String languageCode);

    Page<Product> getByManufacturerInCategory(String catSefUrl, String manuSefUrl, PageRequest pageRequest, String languageCode);

    Page<Product> getByPriceRangeInCategory(String catSefUrl, PriceRange priceRange, PageRequest pageRequest, String languageCode);

    Page<Product> getByCategory(String catSefUrl, PageRequest pageRequest, String languageCode);
}
