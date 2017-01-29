package com.eshop.core.model;

import javax.persistence.Column;
import javax.persistence.Version;

/**
 * Created by phatnguyen on 10/8/16.
 */
public abstract class GenericEntity {

    @Version
    @Column(name = "VERSION")
    private long version;
}
