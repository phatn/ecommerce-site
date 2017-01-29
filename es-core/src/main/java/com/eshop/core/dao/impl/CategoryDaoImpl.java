package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.CategoryDao;
import com.eshop.core.model.Category;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by phatnguyen on 1/4/17.
 */

@Repository("categoryDao")
public class CategoryDaoImpl extends AbstractDao<Category, Long> implements CategoryDao {

    @Override
    public List<Category> getWithDesc(String languageCode) {
        TypedQuery<Category> query = entityManager
                .createQuery("SELECT DISTINCT c FROM Category c JOIN  FETCH c.descriptions cd INNER JOIN " +
                        "cd.language l WHERE l.code = :languageCode", Category.class)
                .setParameter("languageCode", languageCode);
        return query.getResultList();
    }

    @Override
    public List<Category> getWithDescAndManufacturers(String languageCode) {
        TypedQuery<Category> query = entityManager
                .createQuery("SELECT DISTINCT c FROM Category c LEFT JOIN FETCH c.manufacturers m LEFT JOIN  FETCH " +
                        "m.descriptions md JOIN FETCH c.descriptions cd JOIN FETCH c.priceRanges " +
                        "WHERE md.language.code = :languageCode AND cd.language.code = :languageCode", Category.class)
                .setParameter("languageCode", languageCode);
        return query.getResultList();
    }
}
