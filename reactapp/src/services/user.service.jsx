import axios from "axios";
import authHeader from "./auth-header";
import config from "./config";

//AddonService --> admin (Addon)

const getAllAddons = () => {
    return axios.get(config.baseurl + "/admin/getAddon", { headers: authHeader() });
};

const createAddon = (addon) => {
    return axios.post(config.baseurl + "/admin/addAddon", addon, { headers: authHeader() });
};

const getAddonById = (addonId) => {
    return axios.get(config.baseurl + "/admin/getAddon/" + addonId, { headers: authHeader() });
};

const updateAddon = (addonId, addon) => {
    return axios.put(config.baseurl + "/admin/editAddon/" + addonId, addon, { headers: authHeader() });
};

const deleteAddon = (addonId) => {
    return axios.delete(config.baseurl + "/admin/deleteAddon/" + addonId, { headers: authHeader() });
};

//AddService --> user (Addon Plans)

const getAllRechargeAddons = () => {
    return axios.get(config.baseurl + "/user/getAddonAsc", { headers: authHeader() });
};

const getAllRechargeAddonsDesc = () => {
    return axios.get(config.baseurl + "/user/getAddonDesc", { headers: authHeader() });
};

const getRechargeAddonById = (addonId) => {
    return axios.get(config.baseurl + "/user/getAddon/" + addonId, { headers: authHeader() });
};

const createAddonRecharge = (plan) => {
    return axios.post(config.baseurl + "/user/addRecharge", plan, { headers: authHeader() });
};

//MonthlyService --> admin (Monthly plans)

const getAllMonthlyPlans = () => {
    return axios.get(config.baseurl + "/admin/getAllMonthlyPlan", { headers: authHeader() });
};

const createMonthlyPlan = (plan) => {
    return axios.post(config.baseurl + "/admin/monthly/addPlan", plan, { headers: authHeader() });
};

const getMonthlyPlanById = (planId) => {
    return axios.get(config.baseurl + "/admin/monthly/getPlan/" + planId, { headers: authHeader() });
};

const updateMonthlyPlan = (planId, plan) => {
    return axios.put(config.baseurl + "/admin/monthly/editPlan/" + planId, plan, { headers: authHeader() });
};

const deleteMonthlyPlan = (planId) => {
    return axios.delete(config.baseurl + "/admin/monthly/deletePlan/" + planId, { headers: authHeader() });
};

//PopularplansService --> user (Popular plans)

const getAllPopularPlans = () => {
    return axios.get(config.baseurl + "/user/getAllPopularPlan", { headers: authHeader() }); 
};

const getAllPopularMonthlyPlans = () => {
    return axios.get(config.baseurl + "/user/getAllMonthlyPlan", { headers: authHeader() });
};

const getAllPopularPremiumPlans = () => {
    return axios.get(config.baseurl + "/user/getAllPremiumPlan", { headers: authHeader() });
};

const getPopularPlanById = (planId) => {
    return axios.get(config.baseurl + "/user/getPlan/" + planId, { headers: authHeader() });
};

const createRecharge = (plan) => {
    return axios.post(config.baseurl + "/user/addRecharge", plan, { headers: authHeader() });
};

//PremiumplanService --> admin (Premium plan)

const getAllPlans = () => {
    return axios.get(config.baseurl + "/admin/getAllPremiumPlan", { headers: authHeader() });
};

const createPlan = (plan) => {
    return axios.post(config.baseurl + "/admin/premium/addPlan", plan, { headers: authHeader() });
};

const getPlanById = (planId) => {
    return axios.get(config.baseurl + "/admin/premium/getPlan/" + planId, { headers: authHeader() });
};

const updatePlan = (planId, plan) => {
    return axios.put(config.baseurl + "/admin/premium/editPlan/" + planId, plan, { headers: authHeader() });
};

const deletePlan = (planId) => {
    return axios.delete(config.baseurl + "/admin/premium/deletePlan/" + planId, { headers: authHeader() });
};

//RechargeService --> user(recharge history)

const getRechargeById = (email) => {
    return axios.get(config.baseurl + "/user/getRechargeByDesc/" + email, { headers: authHeader() });
};

const getRechargeByIdAsc = (email) => {
    return axios.get(config.baseurl + "/user/getRechargeByAsc/" + email, { headers: authHeader() });
};

const getRecharge = () => {
    return axios.get(config.baseurl + "/admin/getRecharge", { headers: authHeader() });
};

//review --> user(review)

const createReview = (review) => {
    return axios.post(config.baseurl + "/user/addReview", review, { headers: authHeader() });
};

const getAllReview = () => {
    return axios.get(config.baseurl + "/admin/getReview", { headers: authHeader() });
};


const UserService = {
    getAllAddons,
    createAddon,
    getAddonById,
    updateAddon,
    deleteAddon,
    getAllRechargeAddons,
    getAllRechargeAddonsDesc,
    getRechargeAddonById,
    createAddonRecharge,
    getAllMonthlyPlans,
    createMonthlyPlan,
    getMonthlyPlanById,
    updateMonthlyPlan,
    deleteMonthlyPlan,
    getAllPopularPlans,
    getAllPopularMonthlyPlans,
    getAllPopularPremiumPlans,
    getPopularPlanById,
    createRecharge,
    getAllPlans,
    createPlan,
    getPlanById,
    updatePlan,
    deletePlan,
    getRechargeById,
    getRechargeByIdAsc,
    getRecharge,
    createReview,
    getAllReview,
};

export default UserService;