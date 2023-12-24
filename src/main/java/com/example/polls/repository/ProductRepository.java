package com.example.polls.repository;

import com.example.polls.model.Order;
import com.example.polls.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {


    @Query("SELECT r.product AS product, r.rate AS rate FROM Rating r JOIN r.user u JOIN r.product p WHERE p.id = :id")
    List<Object[]> findProductsById(@Param("id") Long id);

}
