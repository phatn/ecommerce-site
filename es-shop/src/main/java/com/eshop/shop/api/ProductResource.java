package com.eshop.shop.api;

import com.eshop.core.dto.ProductDto;
import com.eshop.core.model.Product;
import com.eshop.core.model.common.Page;
import com.eshop.core.model.common.PageRequest;
import com.eshop.core.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by phatnguyen on 1/25/17.
 */

@RestController
@RequestMapping("/api/products")
public class ProductResource {

    @Autowired
    private ProductService productService;

    @RequestMapping("/new-arrivals")
    public Response<List<ProductDto>> getNewArrivals(@RequestParam(name = "lang", defaultValue = "en") String languageCode) {
        return new Response.Builder<>(Response.Status.OK)
                .data(productService.findNewArrivals(languageCode))
                .build();
    }

    @RequestMapping("/manufacturer/{manufacturerId}/page/{page}/size/{size}")
    public Response<List<ProductDto>> getByManufacturer(@RequestParam(name = "lang", defaultValue = "en") String languageCode,
                                                        @PathVariable("manufacturerId") long manufacturerId,
                                                        @PathVariable("page") int currentPage,
                                                        @PathVariable("size") int size) {
        PageRequest pageRequest = new PageRequest(currentPage - 1, size);
        Page<ProductDto> page = productService.findByManufacturer(manufacturerId, pageRequest, languageCode);
        return new Response.Builder<>(Response.Status.OK)
                .data(page.getContent())
                .total(page.getTotalPages())
                .build();
    }
}
