package com.eshop.core.service;

import com.eshop.core.dto.CategoryDto;
import com.eshop.core.model.Category;

import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public interface CategoryService {

    List<CategoryDto> findWithDesc(String languageCode);

    List<CategoryDto> findWithDescAndManufacturers(String languageCode);
}
