package com.examly.springapp.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;

public class LoginRequest {
    
    @NotBlank
    @Email
    private String email;

	@NotBlank
	private String password;

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



}
