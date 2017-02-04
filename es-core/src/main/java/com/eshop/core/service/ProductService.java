package com.eshop.core.service;

import com.eshop.core.dto.ProductDto;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;

import java.util.List;

/**
 * Created by phatnguyen on 12/31/16.
 */
public interface ProductService {

    List<ProductDto> findNewArrivals(String languageCode);

    Page<ProductDto> findByManufacturerInCategory(String catSefUrl, String manuSefUrl, PageRequest pageRequest, String languageCode);

    Page<ProductDto> findByPriceRangeInCategory(String catSefUrl, String priceRangeName, PageRequest pageRequest, String languageCode);

    Page<ProductDto> findByCategory(String catSefUrl, PageRequest pageRequest, String languageCode);

}
