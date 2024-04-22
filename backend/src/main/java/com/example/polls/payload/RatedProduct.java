package com.example.polls.payload;

import com.example.polls.model.Product;

public interface RatedProduct {
    Product getProduct();
    int getRate();
}