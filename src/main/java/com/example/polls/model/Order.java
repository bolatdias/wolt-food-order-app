package com.example.polls.model;


import com.example.polls.model.audit.UserDateAudit;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order extends UserDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private  Product product;
}
