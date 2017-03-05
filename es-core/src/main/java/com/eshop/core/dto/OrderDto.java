package com.eshop.core.dto;

import com.eshop.core.model.DeliveryMethod;
import com.eshop.core.model.OrderStatus;
import com.eshop.core.model.PaymentMethod;
import com.eshop.core.model.common.AuditSection;

import java.util.List;


/**
 * Created by phatnguyen on 1/26/17.
 */
public class OrderDto {

    private Long id;

    private List<OrderLineDto> orderLines;

    private OrderStatus orderStatus;

    private CustomerDto customer;

    private AuditSection auditSection = new AuditSection();

    private DeliveryMethod deliveryMethod;

    private PaymentMethod paymentMethod;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<OrderLineDto> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<OrderLineDto> orderLines) {
        this.orderLines = orderLines;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public CustomerDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }

    public AuditSection getAuditSection() {
        return auditSection;
    }

    public void setAuditSection(AuditSection auditSection) {
        this.auditSection = auditSection;
    }

    public DeliveryMethod getDeliveryMethod() {
        return deliveryMethod;
    }

    public void setDeliveryMethod(DeliveryMethod deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}
