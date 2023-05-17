package com.examly.springapp.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class RechargeModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rechargeId;

    @NotBlank
    private String rechargetype;

    @NotBlank
    private String name;

    @NotBlank
    private String mobile;

    @NotBlank
    private String email;

    @NotBlank
    private String rechargePlan;

    @NotBlank
    private String rechargePrice;

    @NotBlank
    private String startDate;

    @NotBlank
    private String endDate;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "recharge_users", 
        joinColumns = @JoinColumn(name = "recharge_id"), 
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<UserModel> user = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "recharge_plans", 
        joinColumns = @JoinColumn(name = "recharge_id"), 
        inverseJoinColumns = @JoinColumn(name = "plan_id"))
    private Set<PlanModel> plan = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "recharge_addons", 
        joinColumns = @JoinColumn(name = "recharge_id"), 
        inverseJoinColumns = @JoinColumn(name = "addon_id"))
    private Set<AddonModel> addon = new HashSet<>();
    

    public RechargeModel(){

    }

    public RechargeModel(String rechargetype, String name, String mobile, String email, String rechargePlan, String rechargePrice, String startDate, String endDate){
        super();
        this.rechargetype=rechargetype;
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.rechargePlan=rechargePlan;
        this.rechargePrice=rechargePrice;
        this.startDate=startDate;
        this.endDate=endDate;
    }
    
    public int getRechargeId() {
        return rechargeId;
    }
    public void setRechargeId(int rechargeId) {
        this.rechargeId = rechargeId;
    }
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

    

    public Set<UserModel> getUser() {
        return user;
    }

    public void setUser(Set<UserModel> user) {
        this.user = user;
    }

    public Set<PlanModel> getPlan() {
        return plan;
    }

    public void setPlan(Set<PlanModel> plan) {
        this.plan = plan;
    }

    public Set<AddonModel> getAddon() {
        return addon;
    }

    public void setAddon(Set<AddonModel> addon) {
        this.addon = addon;
    }  

}