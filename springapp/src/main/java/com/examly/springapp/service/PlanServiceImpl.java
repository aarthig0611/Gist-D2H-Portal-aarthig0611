package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.PlanModel;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

@Service
public class PlanServiceImpl implements PlanService{
    
    @Autowired
    PlanRepository planRepository;

    @Value("${err103}")
    private String error103;

    @Value("${err104}")
    private String error104;

    @Override
    public PlanModel getRechargePlanById(int planId){
        return planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException(error103 + planId));
    }

    @Override
    public List<PlanModel> getPlan(){
        List<PlanModel> data = planRepository.findAll();
        if(data == null) throw new ResourceNotFoundException(error104);
        return data;
    }

}
