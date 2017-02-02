package com.eshop.core.dao;

import com.eshop.core.model.PriceRange;

/**
 * Created by phatnguyen on 2/1/17.
 */
public interface PriceRangeDao {

    PriceRange getByNameInCategory(String name, String catSefUrl);
}
