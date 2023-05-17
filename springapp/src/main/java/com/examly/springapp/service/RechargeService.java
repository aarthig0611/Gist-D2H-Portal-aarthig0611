package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.entity.RechargeModel;
import com.examly.springapp.model.RechargeRequest;

public interface RechargeService {
    
    public RechargeModel addRecharge(RechargeRequest recharge);
    public List<RechargeModel> viewRecharge();
    public RechargeModel editRecharge(int rechargeId, RechargeModel data);
    public void deleteRecharge(int rechargeId);

}
