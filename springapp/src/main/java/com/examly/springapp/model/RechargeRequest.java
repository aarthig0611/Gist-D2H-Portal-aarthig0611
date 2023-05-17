package com.examly.springapp.model;

public class RechargeRequest {
    
    private String rechargetype;

    private String name;

    private String mobile;

    private String email;

    private String rechargePlan;

    private String rechargePrice;

    private String startDate;

    private String endDate;

    private Long userId;

    private int planId;

    private int addonId;

    public String getRechargetype() {
        return rechargetype;
    }

    public void setRechargetype(String rechargetype) {
        this.rechargetype = rechargetype;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRechargePlan() {
        return rechargePlan;
    }

    public void setRechargePlan(String rechargePlan) {
        this.rechargePlan = rechargePlan;
    }

    public String getRechargePrice() {
        return rechargePrice;
    }

    public void setRechargePrice(String rechargePrice) {
        this.rechargePrice = rechargePrice;
    }    

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    public int getAddonId() {
        return addonId;
    }

    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    
}
