package com.example.polls.repository;

import com.example.polls.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;



public interface RatingRepository extends JpaRepository<Rating,Long> {

    @Query("SELECT r FROM Rating r JOIN r.user u WHERE u.username = :username")
    List<Rating> findRatingByUsername(@Param("username") String username);


    @Query("SELECT AVG(r.rate) FROM Rating r WHERE r.product.id = :product_id")
    int getRatingByProductId(@Param("product_id") Long productId);

}
