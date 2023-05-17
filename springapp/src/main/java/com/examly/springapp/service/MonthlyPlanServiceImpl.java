package com.examly.springapp.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.MonthlyPlan;
import com.examly.springapp.repository.MonthlyPlanRepository;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.exception.RechargePortalException;


@Service
public class MonthlyPlanServiceImpl implements MonthlyPlanService{
    
    @Autowired
    MonthlyPlanRepository planRepository;

    @Value("${err101}")
    private String error101;

    @Value("${err103}")
    private String error103;

    @Value("${err104}")
    private String error104;

    @Override
    public MonthlyPlan addPlan(MonthlyPlan newPlan){
        if(Objects.isNull(newPlan.getPlanType()) || Objects.isNull(newPlan.getPlanName()) || Objects.isNull(newPlan.getPlanValidity()) || Objects.isNull(newPlan.getPlanDetails()) || Objects.isNull(newPlan.getPlanPrice())) 
            throw new RechargePortalException(error101);
        return planRepository.save(newPlan);
    }

    @Override
    public MonthlyPlan getPlanById(int planId){
        return planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException(error103 + planId));
    }

    @Override
    public MonthlyPlan editPlan(int planId, MonthlyPlan data){
        MonthlyPlan plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException(error103 + planId));

        plan.setPlanType(data.getPlanType());
        plan.setPlanName(data.getPlanName());
        plan.setPlanValidity(data.getPlanValidity());
        plan.setPlanDetails(data.getPlanDetails());
        plan.setPlanPrice(data.getPlanPrice());

        return planRepository.save(plan);
    }

    @Override
    public void deletePlan(int planId){
        MonthlyPlan plan = planRepository.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException(error103 + planId));

        planRepository.delete(plan);
    }

    @Override
    public List<MonthlyPlan> getMonthlyPlan(){
        List<MonthlyPlan> data = planRepository.findAll();
        if(data == null) throw new ResourceNotFoundException(error104);
        return data;
    }

}
