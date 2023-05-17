package com.examly.springapp.repository;

import com.examly.springapp.entity.RechargeModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import java.util.List;

@Repository
public interface RechargeRepository extends JpaRepository<RechargeModel, Integer>{

    List<RechargeModel> findByEmail(String email);

    List<RechargeModel> findByEmailOrderByRechargeIdAsc(String email);

    List<RechargeModel> findByEmailOrderByRechargeIdDesc(String email);

}
