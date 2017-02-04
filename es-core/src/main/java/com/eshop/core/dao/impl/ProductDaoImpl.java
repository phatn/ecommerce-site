package com.eshop.core.dao.impl;

import com.eshop.core.dao.AbstractDao;
import com.eshop.core.dao.ProductDao;
import com.eshop.core.model.PriceRange;
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
    public Page<Product> getByManufacturerInCategory(String catSefUrl, String manuSefUrl, PageRequest pageRequest, String languageCode) {
        TypedQuery<Product> query = entityManager
                .createQuery("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN FETCH p.productImages WHERE p.category.sefUrl = :catSefUrl " +
                        "AND p.manufacturer.sefUrl = :manuSefUrl AND l.code = :languageCode", Product.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode)
                .setParameter("manuSefUrl", manuSefUrl);

        if(pageRequest != null && pageRequest.getPage() > -1) {
            query.setFirstResult(pageRequest.getPage());
        }

        if(pageRequest != null && pageRequest.getSize() > -1) {
            query.setMaxResults(pageRequest.getSize());
        }

        TypedQuery<Long> countQuery = entityManager
                .createQuery("SELECT count(DISTINCT p) FROM Product p INNER JOIN  p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN p.productImages pi WHERE p.category.sefUrl = :catSefUrl " +
                        "AND p.manufacturer.sefUrl = :manuSefUrl AND l.code = :languageCode", Long.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode)
                .setParameter("manuSefUrl", manuSefUrl);

        return new Page<>(query.getResultList(), pageRequest.getSize(), countQuery.getSingleResult());
    }

    @Override
    public Page<Product> getByPriceRangeInCategory(String catSefUrl, PriceRange priceRange, PageRequest pageRequest, String languageCode) {

        StringBuilder querySt = new StringBuilder();
        querySt.append("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN FETCH p.productImages WHERE p.category.sefUrl = :catSefUrl ");
        if(priceRange.getSecondPrice() != null) {
            querySt.append("AND p.price BETWEEN :firstPrice AND :secondPrice AND l.code = :languageCode");
        } else {
            querySt.append("AND p.price >= :firstPrice AND l.code = :languageCode");
        }

        TypedQuery<Product> query = entityManager
                .createQuery(querySt.toString(), Product.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode)
                .setParameter("firstPrice", priceRange.getFirstPrice());

        if(priceRange.getSecondPrice() != null) {
            query.setParameter("secondPrice", priceRange.getSecondPrice());
        }

        if(pageRequest != null && pageRequest.getPage() > -1) {
            query.setFirstResult(pageRequest.getPage());
        }

        if(pageRequest != null && pageRequest.getSize() > -1) {
            query.setMaxResults(pageRequest.getSize());
        }

        StringBuilder countQuerySt = new StringBuilder();
        countQuerySt.append("SELECT count(DISTINCT p) FROM Product p INNER JOIN  p.descriptions pd INNER JOIN " +
                "pd.language l LEFT JOIN p.productImages pi WHERE p.category.sefUrl = :catSefUrl ");
        if(priceRange.getSecondPrice() != null) {
            countQuerySt.append("AND p.price BETWEEN :firstPrice AND :secondPrice AND l.code = :languageCode");
        } else {
            countQuerySt.append("AND p.price >= :firstPrice AND l.code = :languageCode");
        }

        TypedQuery<Long> countQuery = entityManager
                .createQuery(countQuerySt.toString(), Long.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode)
                .setParameter("firstPrice", priceRange.getFirstPrice());

        if(priceRange.getSecondPrice() != null) {
            countQuery.setParameter("secondPrice", priceRange.getSecondPrice());

        }

        return new Page<>(query.getResultList(), pageRequest.getSize(), countQuery.getSingleResult());
    }

    @Override
    public Page<Product> getByCategory(String catSefUrl, PageRequest pageRequest, String languageCode) {

        TypedQuery<Product> query = entityManager
                .createQuery("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN FETCH p.productImages WHERE p.category.sefUrl = :catSefUrl " +
                        "AND l.code = :languageCode", Product.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode);

        if(pageRequest != null && pageRequest.getPage() > -1) {
            query.setFirstResult(pageRequest.getPage());
        }

        if(pageRequest != null && pageRequest.getSize() > -1) {
            query.setMaxResults(pageRequest.getSize());
        }

        TypedQuery<Long> countQuery = entityManager
                .createQuery("SELECT count(DISTINCT p) FROM Product p INNER JOIN  p.descriptions pd INNER JOIN " +
                        "pd.language l LEFT JOIN p.productImages pi WHERE p.category.sefUrl = :catSefUrl " +
                        "AND l.code = :languageCode", Long.class)
                .setParameter("catSefUrl", catSefUrl)
                .setParameter("languageCode", languageCode);

        return new Page<>(query.getResultList(), pageRequest.getSize(), countQuery.getSingleResult());
    }

    @Override
    public Product getBySefUrl(String sefUrl, String languageCode) {
        return entityManager.createQuery("SELECT DISTINCT p FROM Product p JOIN FETCH p.descriptions pd INNER JOIN " +
                "pd.language l LEFT JOIN FETCH p.productImages JOIN FETCH p.category WHERE p.sefUrl = :sefUrl " +
                "AND l.code = :languageCode", Product.class)
                .setParameter("sefUrl", sefUrl)
                .setParameter("languageCode", languageCode)
                .getSingleResult();
    }
}
