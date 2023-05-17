import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Popularplans = () => {

    const [plans, setPlans] = useState([])
    const [message, setMessage] = useState("");

    useEffect(() => {

        getAllPlans();
    }, []);

    
    const getAllPlans = () => {
        UserService.getAllPopularPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const getAllMonthlyPlans = () => {
        UserService.getAllPopularMonthlyPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const getAllPremiumPlans = () => {
        UserService.getAllPopularPremiumPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    return (
        <>
        <div className = "container">
            <h2 className = "text-center"> Popular Plans </h2>
            <div>Plan Type: <button className="btn btn-dark" onClick={() => getAllMonthlyPlans()}>Monthly Plans</button><div className="space"></div> 
                        <button className="btn btn-dark" onClick={() => getAllPremiumPlans()}>Premium Plans</button>                    
            </div><br />
            {
                plans.map(
                    plan =>
                    <div className="row product" key = {plan.planId}> 
                        <div className="col-md-5 product-details">
                            <strong>{plan.planType}</strong><br />
                            <h3><span>&#8377;</span>{plan.planPrice}</h3>
                            <strong>Channels: </strong>{plan.planName}<br />
                            <strong>Details: </strong>{plan.planDetails}
                        </div>
                        <div className="col-md-3 product-details">
                            <strong>Channels: </strong>{plan.planName}<br />
                        </div>
                        <div className="col-md-3 product-details">
                            <strong>Validity: </strong> {plan.planValidity} Days
                        </div>
                        <div className="col-md-1">
                        <Link id="popularPlansGrid1" className="btn btn-success" to={`/recharge/plan/${plan.planId}`} > <span>&#8377;</span>{plan.planPrice} </Link>
                        </div>
                    </div>
                )
            }
            {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Popularplans;