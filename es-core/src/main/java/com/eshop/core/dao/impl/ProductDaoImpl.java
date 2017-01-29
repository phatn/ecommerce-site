package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.ProductDao;
import com.eshop.core.model.Product;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by phatnguyen on 12/31/16.
 */

@Repository
public class ProductDaoImpl extends AbstractDao<Product, Long> implements ProductDao {

    @Override
    public List<Product> getNewArrivals(String languageCode) {
        TypedQuery<Product> query = entityManager
                .createQuery("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN FETCH p.productImages pi WHERE l.code = :languageCode", Product.class)
                .setParameter("languageCode", languageCode);
        return query.getResultList();
    }

    @Override
    public Page<Product> getByManufacturer(long manufacturerId, PageRequest pageRequest, String languageCode) {
        TypedQuery<Product> query = entityManager
                .createQuery("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN FETCH p.productImages " +
                        "WHERE p.manufacturer.id = :manufacturerId AND l.code = :languageCode", Product.class)
                .setParameter("languageCode", languageCode)
                .setParameter("manufacturerId", manufacturerId);

        if(pageRequest != null && pageRequest.getPage() > -1) {
            query.setFirstResult(pageRequest.getPage());
        }

        if(pageRequest != null && pageRequest.getSize() > -1) {
            query.setMaxResults(pageRequest.getSize());
        }

        TypedQuery<Long> countQuery = entityManager
                .createQuery("SELECT count(DISTINCT p) FROM Product p INNER JOIN  p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN p.productImages pi " +
                        "WHERE p.manufacturer.id = :manufacturerId AND l.code = :languageCode", Long.class)
                .setParameter("languageCode", languageCode)
                .setParameter("manufacturerId", manufacturerId);

        return new Page<>(query.getResultList(), pageRequest.getSize(), countQuery.getSingleResult());
    }
}
