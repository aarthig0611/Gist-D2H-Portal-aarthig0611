package com.examly.springapp.repository;

import com.examly.springapp.entity.MonthlyPlan;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

@Repository
public interface MonthlyPlanRepository extends JpaRepository<MonthlyPlan, Integer>{
    
}
