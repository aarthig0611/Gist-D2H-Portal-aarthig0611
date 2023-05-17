package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.PremiumPlan;

public interface PremiumPlanService {
    
    public PremiumPlan addPlan(PremiumPlan newPlan);
    public PremiumPlan getPlanById(int planId);
    public PremiumPlan editPlan(int planId, PremiumPlan data);
    public void deletePlan(int planId);
    public List<PremiumPlan> getPremiumPlan();

}
