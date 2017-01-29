package com.eshop.shop.api;

import com.eshop.core.dto.CategoryDto;
import com.eshop.core.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by phatnguyen on 1/7/17.
 */

@RestController
@RequestMapping("/api/categories")
public class CategoryResource {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping
    public Response<List<CategoryDto>> getCategories(@RequestParam(name = "lang", defaultValue = "en") String languageCode) {
        return new Response.Builder<>(Response.Status.OK)
                .data(categoryService.findWithDescAndManufacturers(languageCode))
                .build();
    }

}

