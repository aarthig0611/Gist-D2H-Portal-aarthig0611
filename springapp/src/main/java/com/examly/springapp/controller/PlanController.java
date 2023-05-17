package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.PlanModel;
import org.springframework.security.access.prepost.PreAuthorize;
import com.examly.springapp.service.PlanService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PlanController{
    
    @Autowired
    PlanService service;

    @GetMapping("/user/getPlan/{planId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<PlanModel> getRechargePlanById(@PathVariable int planId){
        PlanModel plan = service.getRechargePlanById(planId);
        return ResponseEntity.ok(plan);
    }

    @GetMapping("/user/getAllPopularPlan")
    @PreAuthorize("hasRole('USER')")
    public List<PlanModel> getPlan(){
        return service.getPlan();
    }

}
