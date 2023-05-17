package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.MonthlyPlan;

public interface MonthlyPlanService {
    
    public MonthlyPlan addPlan(MonthlyPlan newPlan);
    public MonthlyPlan getPlanById(int planId);
    public MonthlyPlan editPlan(int planId, MonthlyPlan data);
    public void deletePlan(int planId);
    public List<MonthlyPlan> getMonthlyPlan();

}
