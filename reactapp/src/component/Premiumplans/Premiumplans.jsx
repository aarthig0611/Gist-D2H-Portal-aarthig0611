import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Preimumplan = () => {

    const [plans, setPlans] = useState([])
    const [message, setMessage] = useState("");

    useEffect(() => {

        getAllPlans();
    }, []);

    
    const getAllPlans = () => {
        UserService.getAllPlans().then((response) => {
            setPlans(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const deleteByPlan = (planId) => {
       UserService.deletePlan(planId).then((response) =>{
          getAllPlans();
       }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
       })
        
    };

    return (
        <>
        <div className = "container">
            <h2 className = "text-center"> Premium Plans </h2>
            <Link to = "/add-premium" className = "btn btn-primary mb-2" id="addPlan"> Add Premium Plans </Link>
            <br />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Plan Type </th>
                        <th> Plan Name </th>
                        <th> Plan Validity </th>
                        <th> Plan Details </th>
                        <th> Plan Price </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plans.map(
                            plan =>
                            <tr key = {plan.planId}> 
                                <td> {plan.planType} </td>
                                <td> {plan.planName} </td>
                                <td>{plan.planValidity} Days</td>
                                <td>{plan.planDetails}</td>
                                <td><span>&#8377;</span>{plan.planPrice}</td>
                                <td><Link id="editPremiumPlan" className="btn btn-info" to={`/premium/${plan.planId}`} >Update</Link></td>
                                <td><button id="deletePremiumPlan" className = "btn btn-danger" onClick = {() => deleteByPlan(plan.planId)}> Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
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

export default Preimumplan;