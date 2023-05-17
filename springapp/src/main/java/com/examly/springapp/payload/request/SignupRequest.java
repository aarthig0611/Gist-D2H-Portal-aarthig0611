package com.examly.springapp.payload.request;

import javax.validation.constraints.NotBlank;

import java.util.Set;

public class SignupRequest {
    
    @NotBlank
    private String username;

    @NotBlank
    private String email;

    @NotBlank
    private String mobileNumber;

    private Set<String> userRole;

    @NotBlank
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Set<String> getUserRole() {
        return userRole;
    }

    public void setUserRole(Set<String> userRole) {
        this.userRole = userRole;
    }

    

}
