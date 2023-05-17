export default class Recharge {
    constructor(_rechargetype, _name, _mobile, _email, _rechargePlan, _rechargePrice, _startDate, _endDate, _userId, _planId, _addonId){
        this.rechargetype = _rechargetype;
        this.name = _name;
        this.mobile = _mobile;
        this.email = _email;
        this.rechargePlan = _rechargePlan;
        this.rechargePrice = _rechargePrice;
        this.startDate = _startDate;
        this.endDate = _endDate;
        this.userId = _userId;
        this.planId = _planId;
        this.addonId = _addonId;
    }
}