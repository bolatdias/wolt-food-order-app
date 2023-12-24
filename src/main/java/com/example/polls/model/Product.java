package com.example.polls.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int price;
    private String name;

    @Column(name = "cook_time")
    private  int cookTime;

    @OneToMany(mappedBy = "product")
    Set<Rating> ratings;


}
