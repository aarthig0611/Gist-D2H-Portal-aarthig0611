import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";
import Recharge from '../../model/Recharge';

const RechargePopularplans = () => {

    const currentUser = AuthService.getCurrentUser();

    const navigate = useNavigate();
    const {id} = useParams();

    const [rechargetype, setRechargetype] = useState('');
    const [name] = useState(currentUser.username);
    const [mobile] = useState(currentUser.mobileNumber);
    const [email] = useState(currentUser.email);
    const [message, setMessage] = useState("");
    const [rechargeValidity, setRechargeValidity] = useState('');
    const [rechargePlan, setRechargePlan] = useState('');
    const [rechargePrice, setRechargePrice] = useState('');

    const saveRecharge = (e) => {
        e.preventDefault();

        const d = new Date();
        let startDate = d.toLocaleDateString();
        d.setDate(d.getDate() + parseInt(rechargeValidity));
        let endDate = d.toLocaleDateString();
        let userId = currentUser.id;
        let planId = id;
        let addonId = 0;

        let recharge = new Recharge(rechargetype, name, mobile, email, rechargePlan, rechargePrice, startDate, endDate, userId, planId, addonId); 

            UserService.createAddonRecharge(recharge).then((response) =>{

                console.log(response.data)
                alert("Recharge successsful...!");
    
                navigate('/history');
    
            }).catch(error => {
                console.log(error.response.data);
                const resmsg = (error.response.data.message) || error.message || error.toString();
                setMessage(resmsg);
            })
        
    };

    useEffect(() => {

        UserService.getPopularPlanById(id).then((response) =>{
            setRechargetype(response.data.planType)
            setRechargePlan(response.data.planName)
            setRechargeValidity(response.data.planValidity)
            setRechargePrice(response.data.planPrice)
        }).catch(error => {
            console.log(error)
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    }, []);  // eslint-disable-line

    return (
        <>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Recharge Plan</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Type :</label>
                                    <input
                                        type = "text"
                                        id = "enterRechargeType"
                                        placeholder = "Enter Recharge Type"
                                        name = "planType"
                                        className = "form-control"
                                        value = {rechargetype}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        id = "enterName"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile :</label>
                                    <input
                                        type = "text"
                                        id = "enterToRecharge"
                                        placeholder = "Enter Mobile Number"
                                        name = "mobile"
                                        className = "form-control"
                                        value = {mobile}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        id = "enterEmailId"
                                        placeholder = "Enter Email id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Plan :</label>
                                    <input
                                        type = "text"
                                        id = "EnterRechargePlan"
                                        placeholder = "Enter Recharge Plan"
                                        name = "planName"
                                        className = "form-control"
                                        value = {rechargePlan}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Recharge Price :</label>
                                    <input
                                        type = "text"
                                        id = "enterRechargePrice"
                                        placeholder = "Enter Plan Price"
                                        name = "planPrice"
                                        className = "form-control"
                                        value = {rechargePrice}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" id="rechargeButton" onClick = {(e) => saveRecharge(e)} >Recharge </button>
                                <Link to="/plan/popular" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </form>

                        </div>
                    </div>
                </div>

           </div>
        </>
    );
};

export default RechargePopularplans;