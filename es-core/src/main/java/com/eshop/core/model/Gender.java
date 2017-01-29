package com.eshop.core.model;

/**
 * Created by phatnguyen on 10/8/16.
 */
public enum Gender {

    MALE("Male"), female("Female"), NOT_SPECIFIED("Not Specified");

    private String name;

    private Gender(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return getName();
    }

    public static Gender parse(String input) {
        for (Gender gender : Gender.values()) {
            if (gender.name.equals(input))
                return gender;
        }
        return NOT_SPECIFIED;
    }
}