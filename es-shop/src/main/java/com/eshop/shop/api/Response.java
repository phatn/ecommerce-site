package com.eshop.shop.api;

/**
 * Created by phatnguyen on 1/7/17.
 */

public class Response<T> {

    private final Status status;

    private final T data;

    private final Error error;

    private final Integer pageNumber;

    private final Long totalItems;

    private String nextPage;

    public static class Builder<T> {

        private Status status;

        private T data;

        private Error error;

        private Integer pageNumber;

        private Long totalItems;

        private String nextPage;

        public Builder(Status status) {
            this.status = status;
        }

        public Builder data(T data) {this.data = data; return this; }

        public Builder error(Error error) {this.error = error; return this; }

        public Builder pageNumber(Integer pageNumber) {this.pageNumber = pageNumber; return this; }

        public Builder totalItems(Long totalItems) {this.totalItems = totalItems; return this; }

        public Builder nextPage(String nextPage) {this.nextPage = nextPage; return this; }

        public Response build() {
            return new Response(this);
        }
    }


    private Response(Builder<T> builder) {
        status = builder.status;
        data = builder.data;
        error = builder.error;
        pageNumber = builder.pageNumber;
        totalItems =  builder.totalItems;
        nextPage = builder.nextPage;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public String getNextPage() {
        return nextPage;
    }

    public Long getTotalItems() {
        return totalItems;
    }

    public Status getStatus() {
        return status;
    }

    public Object getData() {
        return data;
    }

    public Error getError() {
        return error;
    }

    public static enum Status {
        OK, ERROR
    }

    public static final class Error {

        private final int errorCode;

        private final String description;

        public Error(int errorCode, String description) {
            this.errorCode = errorCode;
            this.description = description;
        }

        public int getErrorCode() {
            return errorCode;
        }

        public String getDescription() {
            return description;
        }
    }
}

