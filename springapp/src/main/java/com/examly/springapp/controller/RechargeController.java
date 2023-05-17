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
import org.springframework.security.access.prepost.PreAuthorize;

import com.examly.springapp.entity.RechargeModel;
import com.examly.springapp.repository.RechargeRepository;
import com.examly.springapp.model.RechargeRequest;
import com.examly.springapp.service.RechargeService;

import javax.validation.Valid;
import com.examly.springapp.payload.response.MessageResponse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RechargeController{
    
    @Autowired
    RechargeService service;

    @Autowired
    RechargeRepository rechargeRepository;

    @PostMapping("/user/addRecharge")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addRecharge(@Valid @RequestBody RechargeRequest recharge){
        service.addRecharge(recharge);
        return ResponseEntity.ok(new MessageResponse("Recharged Successfully !"));

    }

    @GetMapping("/admin/getRecharge")
    @PreAuthorize("hasRole('ADMIN')")
    public List<RechargeModel> viewRecharge(){
        return service.viewRecharge();
    }

    @PutMapping("/user/editRecharge/{rechargeId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<RechargeModel> editRecharge(@PathVariable int rechargeId, @RequestBody RechargeModel data){
        RechargeModel updatedRecharge = service.editRecharge(rechargeId, data);
        return ResponseEntity.ok(updatedRecharge);
    }

    @DeleteMapping("/user/deleteRecharge/{rechargeId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<String, Boolean>> deleteRecharge(@PathVariable int rechargeId){
        service.deleteRecharge(rechargeId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getRechargeByAsc/{email}")
    @PreAuthorize("hasRole('USER')")
    public List<RechargeModel> viewRechargeByEmailAsc(@PathVariable String email){
        return rechargeRepository.findByEmailOrderByRechargeIdAsc(email);
    }

    @GetMapping("/user/getRechargeByDesc/{email}")
    @PreAuthorize("hasRole('USER')")
    public List<RechargeModel> viewRechargeByEmailDesc(@PathVariable String email){
        return rechargeRepository.findByEmailOrderByRechargeIdDesc(email);
    }

}
