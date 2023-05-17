package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.ReviewModel;

public interface ReviewService {
    
    public ReviewModel addReview(ReviewModel review);
    public List<ReviewModel> viewReview();

}
