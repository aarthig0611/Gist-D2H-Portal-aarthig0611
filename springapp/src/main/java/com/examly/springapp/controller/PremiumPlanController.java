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

import com.examly.springapp.entity.PremiumPlan;
import org.springframework.security.access.prepost.PreAuthorize;
import com.examly.springapp.service.PremiumPlanService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PremiumPlanController {
    
    @Autowired
    PremiumPlanService service;

    @PostMapping("/admin/premium/addPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public PremiumPlan addPlan(@RequestBody PremiumPlan newPlan){
        return service.addPlan(newPlan);
    }

    @GetMapping("/admin/getAllPremiumPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public List<PremiumPlan> getPremiumPlan(){
        return service.getPremiumPlan();
    }

    @GetMapping("/admin/premium/getPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PremiumPlan> getPlanById(@PathVariable int planId){
        PremiumPlan plan = service.getPlanById(planId);
        return ResponseEntity.ok(plan);
    }

    @PutMapping("/admin/premium/editPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PremiumPlan> editPlan(@PathVariable int planId, @RequestBody PremiumPlan data){
        PremiumPlan updatedPlan = service.editPlan(planId, data);
        return ResponseEntity.ok(updatedPlan);
    }

    @DeleteMapping("/admin/premium/deletePlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> viewPlan(@PathVariable int planId){
        service.deletePlan(planId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getAllPremiumPlan")
    @PreAuthorize("hasRole('USER')")
    public List<PremiumPlan> getPopularPremiumPlan(){
        return service.getPremiumPlan();
    }
}