package com.example.polls.payload;

import com.example.polls.model.Product;

import java.security.PublicKey;

public class ProductResponse {
    Product product;
    int rate;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }
}
