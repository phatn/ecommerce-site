package com.eshop.core.dao;

import com.eshop.core.model.Category;

import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public interface CategoryDao {

    List<Category> getWithDesc(String languageCode);

    List<Category> getWithDescAndManufacturers(String languageCode);
}
