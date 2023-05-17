package com.examly.springapp.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.AddonModel;
import com.examly.springapp.repository.AddonRepository;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.exception.RechargePortalException;

@Service
public class AddOnServiceImpl implements AddOnService{
    
    @Autowired
    AddonRepository addonRepository;

    @Value("${err101}")
    private String error101;

    @Value("${err102}")
    private String error102;

    @Value("${err104}")
    private String error104;

    @Override
    public AddonModel addAddon(AddonModel data){
        if(Objects.isNull(data.getAddonName()) || Objects.isNull(data.getAddonDetails()) || Objects.isNull(data.getAddonPrice())) 
            throw new RechargePortalException(error101);
        return addonRepository.save(data);
    }

    @Override
    public AddonModel getAddonById(int addonId){
        return addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException(error102 + addonId));
    }

    @Override
    public AddonModel editAddon(int addonId, AddonModel data){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException(error102 + addonId));

        addon.setAddonName(data.getAddonName());
        addon.setAddonPrice(data.getAddonPrice());
        addon.setAddonDetails(data.getAddonDetails());

        return addonRepository.save(addon);
    }

    @Override
    public void deleteAddon(int addonId){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException(error102 + addonId));

        addonRepository.delete(addon);
    }

    @Override
    public List<AddonModel> getAddon(){
        List<AddonModel> data = addonRepository.findAll();
        if(data == null) throw new ResourceNotFoundException(error104);
        return data;
    }

}

