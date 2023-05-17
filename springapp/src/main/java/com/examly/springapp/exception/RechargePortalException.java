package com.examly.springapp.exception;

public class RechargePortalException extends IllegalArgumentException{

    private static final long serialVersionUID = 1L;
	
	public RechargePortalException(String message) {
		super(message);
	}
}

