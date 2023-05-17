package com.examly.springapp.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
@DiscriminatorValue("Monthly")
public class MonthlyPlan extends PlanModel{
    
    @NotBlank
    private String planName;

    @NotBlank
    private String planValidity;

    @NotBlank
    private String planDetails;

    @NotBlank
    private String planPrice;

    public MonthlyPlan(){

    }

    public MonthlyPlan(String planType, String planName, String planValidity, String planDetails, String planPrice) {
        super(planType);
        this.planName = planName;
        this.planValidity = planValidity;
        this.planDetails = planDetails;
        this.planPrice = planPrice;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getPlanValidity() {
        return planValidity;
    }

    public void setPlanValidity(String planValidity) {
        this.planValidity = planValidity;
    }

    public String getPlanDetails() {
        return planDetails;
    }

    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }

    public String getPlanPrice() {
        return planPrice;
    }

    public void setPlanPrice(String planPrice) {
        this.planPrice = planPrice;
    }

    
}
