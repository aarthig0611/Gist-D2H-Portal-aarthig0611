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

import com.examly.springapp.entity.AddonModel;
import com.examly.springapp.repository.AddonRepository;
import com.examly.springapp.service.AddOnService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AddOnController{
    
    @Autowired
    AddOnService service;

    @Autowired
    AddonRepository addonRepository;

    @PostMapping("/admin/addAddon")
    @PreAuthorize("hasRole('ADMIN')")
    public AddonModel addAddon(@RequestBody AddonModel data){
        return service.addAddon(data);
    }
    
    @GetMapping("/admin/getAddon")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AddonModel> getAddon(){
        return service.getAddon();
    }

    @GetMapping("/admin/getAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AddonModel> getAddonById(@PathVariable int addonId){
        AddonModel addon = service.getAddonById(addonId);
        return ResponseEntity.ok(addon);
    }

    @PutMapping("/admin/editAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AddonModel> editAddon(@PathVariable int addonId, @RequestBody AddonModel data){
        AddonModel updatedAddon = service.editAddon(addonId, data);
        return ResponseEntity.ok(updatedAddon);
    }

    @DeleteMapping("/admin/deleteAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int addonId){
        service.deleteAddon(addonId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getAddon")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddon(){
        return service.getAddon();
    }

    @GetMapping("/user/getAddon/{addonId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<AddonModel> getRechargeAddonById(@PathVariable int addonId){
        AddonModel addon = service.getAddonById(addonId);
        return ResponseEntity.ok(addon);
    }
    
    @GetMapping("/user/getAddonAsc")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddonAsc(){
        return addonRepository.findByOrderByAddonPriceAsc();
    }

    @GetMapping("/user/getAddonDesc")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddonDesc(){
        return addonRepository.findByOrderByAddonPriceDesc();
    }

}
