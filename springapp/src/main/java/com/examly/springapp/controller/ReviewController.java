package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.examly.springapp.entity.ReviewModel;
import com.examly.springapp.service.ReviewService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReviewController{

    @Autowired
    ReviewService service;

    @PostMapping("/user/addReview")
    @PreAuthorize("hasRole('USER')")
    public ReviewModel addReview(@RequestBody ReviewModel review){
         return service.addReview(review);
    }

    @GetMapping("/admin/getReview")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ReviewModel> viewReview(){
        return service.viewReview();
    }
    
}
