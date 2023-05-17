package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.AddonModel;

public interface AddOnService{

    public AddonModel addAddon(AddonModel data);
    public AddonModel getAddonById(int addonId);
    public AddonModel editAddon(int addonId, AddonModel data);
    public void deleteAddon(int addonId);
    public List<AddonModel> getAddon();

}