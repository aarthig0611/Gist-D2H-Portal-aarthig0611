package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.MonthlyPlan;
import org.springframework.security.access.prepost.PreAuthorize;
import com.examly.springapp.service.MonthlyPlanService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MonthlyPlanController {
    
    @Autowired
    MonthlyPlanService service;

    @PostMapping("/admin/monthly/addPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public MonthlyPlan addPlan(@RequestBody MonthlyPlan newPlan){
        return service.addPlan(newPlan);
    }

    @GetMapping("/admin/getAllMonthlyPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public List<MonthlyPlan> getMonthlyPlan(){
        return service.getMonthlyPlan();
    }

    @GetMapping("/admin/monthly/getPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MonthlyPlan> getPlanById(@PathVariable int planId){
        MonthlyPlan plan = service.getPlanById(planId);
        return ResponseEntity.ok(plan);
    }

    @PutMapping("/admin/monthly/editPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MonthlyPlan> editPlan(@PathVariable int planId, @RequestBody MonthlyPlan data){
        MonthlyPlan updatedPlan = service.editPlan(planId, data);
        return ResponseEntity.ok(updatedPlan);
    }

    @DeleteMapping("/admin/monthly/deletePlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> viewPlan(@PathVariable int planId){
        service.deletePlan(planId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getAllMonthlyPlan")
    @PreAuthorize("hasRole('USER')")
    public List<MonthlyPlan> getPopularMonthlyPlan(){
        return service.getMonthlyPlan();
    }

}