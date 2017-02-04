package com.eshop.core.service.impl;

import com.eshop.core.dao.CategoryDao;
import com.eshop.core.dto.CategoryDto;
import com.eshop.core.mapping.MapperFactoryFacade;
import com.eshop.core.model.Category;
import com.eshop.core.service.CategoryService;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by phatnguyen on 10/29/16.
 */

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryDao categoryDao;

    @Transactional(readOnly = true)
    @Override
    public List<CategoryDto> findWithDesc(String languageCode) {
        return toCategoryDtos(categoryDao.getWithDesc(languageCode),
                MapperFactoryFacade.Category.getWithDesc());
    }

    @Transactional(readOnly = true)
    @Override
    public List<CategoryDto> findWithDescAndManufacturers(String languageCode) {
        return toCategoryDtos(categoryDao.getWithDescAndManufacturers(languageCode),
                MapperFactoryFacade.Category.getWithDescAndManu());
    }

    private CategoryDto toCategoryDto(Category category, MapperFactory mapperFactory){
        MapperFacade mapper = mapperFactory.getMapperFacade();
        return mapper.map(category, CategoryDto.class);
    }

    private List<CategoryDto> toCategoryDtos(List<Category> categories, MapperFactory mapperFactory) {
        List<CategoryDto> categoryDtos = new ArrayList<>();
        for (Category category : categories) {
            categoryDtos.add(toCategoryDto(category, mapperFactory));
        }

        return categoryDtos;
    }

}
