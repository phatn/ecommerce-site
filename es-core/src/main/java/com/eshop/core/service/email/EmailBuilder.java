package com.eshop.core.service.email;

import com.eshop.core.model.Email;
import com.eshop.core.service.EmailService;
import com.eshop.core.service.common.ObjectMapperEx;
import org.apache.commons.lang3.tuple.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by phatnguyen on 3/19/17.
 */

@Service
public class EmailBuilder {

    private static final Logger LOG = LoggerFactory.getLogger(EmailBuilder.class);

    @Autowired
    private ObjectMapperEx objectMapper;

    @Autowired
    protected EmailService emailService;

    public List<Pair<Email, Map<String, Object>>> buildEmailModels() {
        List<Email> emails = emailService.getEmails();
        List<Pair<Email, Map<String, Object>>> models = new ArrayList<>();
        for(Email email: emails) {
            Map<String, Object> model = new HashMap<>();

            try {
                model = objectMapper.readValue(email.getAdditionalContent(), HashMap.class);
                for(Map.Entry<String, Object> entry : model.entrySet()) {
                    if(entry.getValue() == null) {
                        model.put(entry.getKey(), "");
                    }
                }
            } catch (IOException e) {
                LOG.error("Exception when trying to deserialize json to objects: ", e);
            }

            models.add(Pair.of(email, model));
        }
        return models;
    }
}
