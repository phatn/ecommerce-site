package com.eshop.core.dao;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */
public interface Dao <T, ID extends Serializable> {

    void create(T t);

    T get(ID id);

    List<T> getAll();

    List<T> getAll(Integer limit, Integer offset);

    void update(T t);

    void delete(T t);

    void deleteById(ID id);

    void deleteAll();

    long count();

    boolean exists(ID id);
}
