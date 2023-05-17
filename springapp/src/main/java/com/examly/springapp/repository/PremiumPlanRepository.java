package com.examly.springapp.repository;

import com.examly.springapp.entity.PremiumPlan;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

@Repository
public interface PremiumPlanRepository extends JpaRepository<PremiumPlan, Integer>{
    
}
