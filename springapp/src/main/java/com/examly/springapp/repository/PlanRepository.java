package com.examly.springapp.repository;
import com.examly.springapp.entity.PlanModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepository extends JpaRepository<PlanModel, Integer>{

}
