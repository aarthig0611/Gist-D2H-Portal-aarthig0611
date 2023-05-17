package com.examly.springapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;
import javax.persistence.Id;

@Entity
public class AddonModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;

    @NotBlank
    private String addonName;

    @NotBlank
    private String addonPrice;

    @NotBlank
    private String addonDetails;
    
    public AddonModel(){

    }

    public AddonModel(String addonName, String addonPrice, String addonDetails){
        super();
        this.addonName=addonName;
        this.addonPrice=addonPrice;
        this.addonDetails=addonDetails;
    }

    public int getAddonId() {
        return addonId;
    }
    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }
    public String getAddonName() {
        return addonName;
    }
    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }

    public String getAddonPrice() {
        return addonPrice;
    }

    public void setAddonPrice(String addonPrice) {
        this.addonPrice = addonPrice;
    }

    public String getAddonDetails() {
        return addonDetails;
    }

    public void setAddonDetails(String addonDetails) {
        this.addonDetails = addonDetails;
    }

    
    
}