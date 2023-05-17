package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.PlanModel;

public interface PlanService {
    
    public PlanModel getRechargePlanById(int planId);
    public List<PlanModel> getPlan();
}
