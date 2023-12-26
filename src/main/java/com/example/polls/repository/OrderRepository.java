package com.example.polls.repository;

import com.example.polls.model.Order;
import com.example.polls.model.Rating;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {


    @Query("SELECT o FROM Order o JOIN o.user u WHERE u.username = :username ORDER BY o.orderTime")
    List<Order> findOrderByUsername(@Param("username") String username);

}
