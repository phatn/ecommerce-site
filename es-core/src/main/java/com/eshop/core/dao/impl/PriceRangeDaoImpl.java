package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.PriceRangeDao;
import com.eshop.core.model.PriceRange;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;

/**
 * Created by phatnguyen on 2/1/17.
 */
@Repository
public class PriceRangeDaoImpl extends AbstractDao<PriceRange, Long> implements PriceRangeDao {

    @Override
    public PriceRange getByNameInCategory(String name, String catSefUrl) {
        TypedQuery<PriceRange> query = entityManager.
                createQuery("SELECT p FROM PriceRange p WHERE p.category.sefUrl = :catSefUrl AND p.name = :name",
                        PriceRange.class)
                .setParameter("name", name)
                .setParameter("catSefUrl", catSefUrl);
        return query.getSingleResult();
    }
}
