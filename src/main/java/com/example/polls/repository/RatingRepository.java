package com.example.polls.repository;

import com.example.polls.model.Product;
import com.example.polls.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating,Long> {


    @Query("SELECT DISTINCT r.product FROM Rating r JOIN r.user u WHERE u.username = :username")
    List<Product> findRatedProductsByUsername(@Param("username") String username);

}
