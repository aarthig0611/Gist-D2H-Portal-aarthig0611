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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.examly.springapp.entity.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController{
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/user/getUser")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserModel> getUser(){
        return userRepository.findAll();
    }

    @PutMapping("/user/editUser/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserModel> editUser(@PathVariable Long id, @RequestBody UserModel data){
        UserModel user = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("User not exit with id:" + id));

        user.setEmail(data.getEmail());
        user.setUsername(data.getUsername());
        user.setMobileNumber(data.getMobileNumber());
        user.setUserRole(data.getUserRole());

        UserModel updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/user/deleteUser/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        UserModel user = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("User not exit with id:" + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
