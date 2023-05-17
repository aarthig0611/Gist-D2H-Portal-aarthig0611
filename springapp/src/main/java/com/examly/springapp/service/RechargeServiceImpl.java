package com.examly.springapp.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.UserModel;
import com.examly.springapp.entity.PlanModel;
import com.examly.springapp.entity.AddonModel;
import com.examly.springapp.entity.RechargeModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.repository.AddonRepository;
import com.examly.springapp.repository.RechargeRepository;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.RechargeRequest;

@Service
public class RechargeServiceImpl implements RechargeService{
    
    @Autowired
    RechargeRepository rechargeRepository;

    @Autowired 
    UserRepository userRepository;

    @Autowired
    PlanRepository planRepository;

    @Autowired
    AddonRepository addonRepository;

    @Value("${err101}")
    private String error101;

    @Value("${err102}")
    private String error102;

    @Value("${err103}")
    private String error103;

    @Value("${err104}")
    private String error104;

    @Value("${err105}")
    private String error105;

    @Value("${err107}")
    private String error107;

    @Override
    public RechargeModel addRecharge(RechargeRequest recharge){
        RechargeModel rech = new RechargeModel(
            recharge.getRechargetype(),
            recharge.getName(),
            recharge.getMobile(),
            recharge.getEmail(),
            recharge.getRechargePlan(),
            recharge.getRechargePrice(),
            recharge.getStartDate(),
            recharge.getEndDate()
        );

        Long userid = recharge.getUserId();
        int planid = recharge.getPlanId();
        int addonid = recharge.getAddonId();

        Set<UserModel> users = new HashSet<>();
        Set<PlanModel> plans = new HashSet<>();
        Set<AddonModel> addons = new HashSet<>();

        UserModel userdetails = userRepository.findById(userid)
            .orElseThrow(() -> new ResourceNotFoundException(error107 + userid));
        users.add(userdetails);

        if((planid != 0) && (addonid == 0)){
            PlanModel plandetails = planRepository.findById(planid)
                .orElseThrow(() -> new ResourceNotFoundException(error103 + planid));
            plans.add(plandetails);
            addons.add(null);
        }else if((planid == 0) && (addonid != 0)){
            plans.add(null);
            AddonModel addondetails = addonRepository.findById(addonid)
                .orElseThrow(() -> new ResourceNotFoundException(error102 + addonid));
            addons.add(addondetails);
        }else{
            plans.add(null);
            addons.add(null);
        }

        rech.setUser(users);
        rech.setPlan(plans);
        rech.setAddon(addons);
        return rechargeRepository.save(rech);

    }

    @Override
    public List<RechargeModel> viewRecharge(){
        List<RechargeModel> data = rechargeRepository.findAll();
        if(data == null) throw new ResourceNotFoundException(error104);
        return data;
    }

    @Override
    public RechargeModel editRecharge(int rechargeId, RechargeModel data){
        RechargeModel rech = rechargeRepository.findById(rechargeId)
                    .orElseThrow(() -> new ResourceNotFoundException(error105 + rechargeId));

        rech.setRechargetype(data.getRechargetype());
        rech.setName(data.getName());
        rech.setMobile(data.getMobile());
        rech.setEmail(data.getEmail());
        rech.setRechargePlan(data.getRechargePlan());
        rech.setRechargePrice(data.getRechargePrice());

        return rechargeRepository.save(rech);
    }

    @Override
    public void deleteRecharge(int rechargeId){
        RechargeModel rech = rechargeRepository.findById(rechargeId)
                    .orElseThrow(() -> new ResourceNotFoundException(error105 + rechargeId));

        rechargeRepository.delete(rech);
    }

}
