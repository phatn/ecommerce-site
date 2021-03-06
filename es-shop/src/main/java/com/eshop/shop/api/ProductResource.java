package com.eshop.shop.api;

import com.eshop.core.dto.ProductDto;
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

    @RequestMapping("/category/{catSefUrl}/manufacturer/{sefUrl}/page/{page}/size/{size}")
    public Response<List<ProductDto>> getByManufacturer(@RequestParam(name = "lang", defaultValue = "en") String languageCode,
                                                        @PathVariable("catSefUrl") String catSefUrl,
                                                        @PathVariable("sefUrl") String sefUrl,
                                                        @PathVariable("page") int pageNumber,
                                                        @PathVariable("size") int size) {
        PageRequest pageRequest = new PageRequest((pageNumber - 1) * size, size);
        Page<ProductDto> page = productService.findByManufacturerInCategory(catSefUrl, sefUrl, pageRequest, languageCode);
        return new Response.Builder<>(Response.Status.OK)
                .data(page.getContent())
                .pageNumber(pageNumber)
                .totalItems(page.getTotalItems())
                .build();
    }

    @RequestMapping("/category/{catSefUrl}/price/{name}/page/{page}/size/{size}")
    public Response<List<ProductDto>> getByPrice(@RequestParam(name = "lang", defaultValue = "en") String languageCode,
                                                        @PathVariable("catSefUrl") String catSefUrl,
                                                        @PathVariable("name") String name,
                                                        @PathVariable("page") int pageNumber,
                                                        @PathVariable("size") int size) {
        PageRequest pageRequest = new PageRequest((pageNumber - 1) * size, size);
        Page<ProductDto> page = productService.findByPriceRangeInCategory(catSefUrl, name, pageRequest, languageCode);
        return new Response.Builder<>(Response.Status.OK)
                .data(page.getContent())
                .pageNumber(pageNumber)
                .totalItems(page.getTotalItems())
                .build();
    }

    @RequestMapping("/category/{catSefUrl}/page/{page}/size/{size}")
    public Response<List<ProductDto>> getByCategory(@RequestParam(name = "lang", defaultValue = "en") String languageCode,
                                                 @PathVariable("catSefUrl") String catSefUrl,
                                                 @PathVariable("page") int pageNumber,
                                                 @PathVariable("size") int size) {
        PageRequest pageRequest = new PageRequest((pageNumber - 1) * size, size);
        Page<ProductDto> page = productService.findByCategory(catSefUrl, pageRequest, languageCode);
        return new Response.Builder<>(Response.Status.OK)
                .data(page.getContent())
                .pageNumber(pageNumber)
                .totalItems(page.getTotalItems())
                .build();
    }

    @RequestMapping("/{prodSefUrl}")
    public Response<ProductDto> getBySefUrl(@RequestParam(name = "lang", defaultValue = "en") String languageCode,
                                                    @PathVariable("prodSefUrl") String prodSefUrl) {

        return new Response.Builder<>(Response.Status.OK)
                .data(productService.findBySefUrl(prodSefUrl, languageCode))
                .build();
    }

    @RequestMapping("/{prodSefUrl}/relationships")
    public Response<List<ProductDto>> getRelationshipBySefUrl(
            @RequestParam(name = "lang", defaultValue = "en") String languageCode,
            @PathVariable("prodSefUrl") String prodSefUrl) {

        return new Response.Builder<>(Response.Status.OK)
                .data(productService.findRelationshipsBySefUrl(prodSefUrl, languageCode))
                .build();
    }

}
