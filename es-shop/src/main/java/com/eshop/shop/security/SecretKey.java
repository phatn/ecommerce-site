package com.eshop.shop.security;

import io.jsonwebtoken.impl.crypto.MacProvider;

import java.security.Key;

/**
 * Created by phatnguyen on 3/5/17.
 */
public class SecretKey {

    private static Key key;

    private SecretKey() {}

    public static Key getKey() {
        if(key == null) {
            synchronized (SecretKey.class) {
                if(key == null) {
                    key = MacProvider.generateKey();
                }
            }
        }
        return key;
    }
}
