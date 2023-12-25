package com.example.polls.controller;

import com.example.polls.model.Order;
import com.example.polls.model.Product;
import com.example.polls.model.Rating;
import com.example.polls.model.User;
import com.example.polls.payload.ApiResponse;
import com.example.polls.payload.ProductResponse;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.awt.print.Pageable;
import java.net.URI;
import java.util.*;


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


    @PostMapping("/product/rate/{product_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity addRatingById(
            @CurrentUser UserPrincipal currentUser,
            @PathVariable(value = "product_id") Long product_id,
            @RequestBody RatingRequest ratingRequest) {
        Rating rating = new Rating();
        rating.setUser(userRepository.findByUsername(currentUser.getUsername()).orElseThrow());
        rating.setProduct(productRepository.findById(product_id).orElseThrow());
        rating.setRate(ratingRequest.getRate());

        ratingRepository.save(rating);

        return new ResponseEntity(new ApiResponse(true, "Rating has been succesfully added"),
                HttpStatus.OK);
    }


    @PostMapping("/product/order/{product_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity createOrderById(
            @CurrentUser UserPrincipal currentUser,
            @PathVariable(value = "product_id") Long product_id
    ) {
        Order order = new Order();
        order.setUser(userRepository.findByUsername(currentUser.getUsername()).orElseThrow());
        order.setProduct(productRepository.findById(product_id).orElseThrow());

        orderRepository.save(order);
        return new ResponseEntity(new ApiResponse(true, "Order has been created"),
                HttpStatus.OK);
    }


    @GetMapping("product/{product_id}")
    public ResponseEntity<ProductResponse> getProductById(
            @PathVariable(value = "product_id") Long productId
    ) {
        ProductResponse productResponse = new ProductResponse();
        productResponse.setProduct(productRepository.findById(productId).orElseThrow());
        productResponse.setRate(ratingRepository.getRatingByProductId(productId));
        if (productResponse.getProduct() == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(productResponse, HttpStatus.OK);
        }
    }

    @GetMapping("/product/search")
    public List<ProductResponse> searchProducts(
            @RequestParam(name = "name", required = false) String searchTerm,
            @RequestParam(name = "minPrice", required = false, defaultValue = "0") Integer minPrice,
            @RequestParam(name = "maxPrice", required = false, defaultValue = "20000") Integer maxPrice,
            @RequestParam(name = "minRating", required = false, defaultValue = "0") Integer minRating,
            @RequestParam(name = "maxRating", required = false, defaultValue = "10") Integer maxRating) {

        List<Product> productList = productRepository.searchByNameAndPriceRange(searchTerm, minPrice, maxPrice);
        List<ProductResponse> productResponses = new ArrayList<>();

        for (Product product : productList) {
            ProductResponse productResponse = new ProductResponse();
            productResponse.setProduct(product);

            // Get the average rating for the product ID within the specified range
            Integer rating = ratingRepository.getRatingByProductId(product.getId());


            if(rating==null){
                rating=0;
            }

            if (minRating <= rating && rating <= maxRating) {
                productResponse.setRate(rating);
                productResponses.add(productResponse);
            }
        }

        return productResponses;
    }



}

