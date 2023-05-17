package com.examly.springapp.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.ReviewModel;
import com.examly.springapp.repository.ReviewRepository;
import com.examly.springapp.exception.RechargePortalException;
import com.examly.springapp.exception.ResourceNotFoundException;

@Service
public class ReviewServiceImpl implements ReviewService{
 
    @Autowired
    ReviewRepository reviewRepository;

    @Value("${err101}")
    private String error101;

    @Value("${err104}")
    private String error104;

    @Override
    public ReviewModel addReview(ReviewModel review){
        if(Objects.isNull(review.getEmail()) || Objects.isNull(review.getComments()))
            throw new RechargePortalException(error101);
         return reviewRepository.save(review);
    }

    @Override
    public List<ReviewModel> viewReview(){
        List<ReviewModel> data = reviewRepository.findAll();
        if(data == null) throw new ResourceNotFoundException(error104);
        return data;
    }

}
