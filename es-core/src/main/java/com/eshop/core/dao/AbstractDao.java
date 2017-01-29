package com.eshop.core.dao;

import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public abstract class AbstractDao<T, ID extends Serializable> implements Dao<T, ID> {

    @PersistenceContext(unitName="es-corePU")
    protected EntityManager entityManager;

    private Class<T> domainClass;

    public Class<T> getDomainClass() {
        if(domainClass == null) {
            ParameterizedType thisType = (ParameterizedType)getClass().getGenericSuperclass();
            this.domainClass = (Class<T>)thisType.getActualTypeArguments()[0];
        }
        return domainClass;
    }

    private String getDomainClassName() {
        return getDomainClass().getName();
    }

    public void setDomainClass(Class<T> domainClass) {
        this.domainClass = domainClass;
    }

    @Override
    public void create(T t) {
        entityManager.persist(t);
    }

    @Override
    public T get(ID id) {
        return entityManager.find(getDomainClass(), id);
    }

    @Override
    public List<T> getAll() {
        return entityManager.createQuery("from " + getDomainClassName(), getDomainClass()).getResultList();
    }

    @Override
    public List<T> getAll(Integer limit, Integer offset) {
        TypedQuery<T> query = entityManager.createQuery("from " + getDomainClassName(), getDomainClass());
        if(limit != null) {
            query.setMaxResults(limit);
        }

        if(offset != null) {
            query.setFirstResult(offset);
        }
        return query.getResultList();
    }

    @Override
    public void update(T t) {
        entityManager.merge(t);
    }

    @Override
    public void delete(T t) {
        entityManager.remove(t);
    }

    @Override
    public void deleteById(ID id) {
        delete(get(id));
    }

    @Override
    public void deleteAll() {
        entityManager.createQuery("delete from " + getDomainClassName()).executeUpdate();
    }

    @Override
    public long count() {
        return (Long)entityManager.createQuery("select count(*) from " + getDomainClassName()).getSingleResult();
    }

    @Override
    public boolean exists(ID id) {
        return get(id) != null;
    }

}
