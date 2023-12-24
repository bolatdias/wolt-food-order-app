package com.example.polls.controller;

import com.example.polls.model.Order;
import com.example.polls.model.Rating;
import com.example.polls.model.User;
import com.example.polls.payload.ApiResponse;
import com.example.polls.payload.RatingRequest;
import com.example.polls.payload.UserSummary;
import com.example.polls.repository.OrderRepository;
import com.example.polls.repository.ProductRepository;
import com.example.polls.repository.RatingRepository;
import com.example.polls.repository.UserRepository;
import com.example.polls.security.CurrentUser;
import com.example.polls.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/product/rate/{product_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity addRatingById(
            @CurrentUser UserPrincipal currentUser,
            @PathVariable(value = "product_id") Long product_id,
            @RequestBody RatingRequest ratingRequest) {
        Rating rating=new Rating();
        rating.setUser(userRepository.findByUsername(currentUser.getUsername()).orElseThrow());
        rating.setProduct(productRepository.findById(product_id).orElseThrow());
        rating.setRate(ratingRequest.getRate());

        ratingRepository.save(rating);

        return new ResponseEntity(new ApiResponse(true, "Rating has been succesfully added"),
                HttpStatus.OK);
    }



    @PostMapping("product/order/{product_id}")
    @PreAuthorize("hasRole('USER')")
    public  ResponseEntity createOrderById(
            @CurrentUser UserPrincipal currentUser,
            @PathVariable(value = "product_id") Long product_id
    ){
        Order order=new Order();
        order.setUser(userRepository.findByUsername(currentUser.getUsername()).orElseThrow());
        order.setProduct(productRepository.findById(product_id).orElseThrow());

        orderRepository.save(order);
        return  new ResponseEntity(new ApiResponse(true, "Order has been created"),
                HttpStatus.OK);
    }

}
