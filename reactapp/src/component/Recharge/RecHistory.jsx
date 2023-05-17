import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";

const RecHistory = () => {

    const currentUser = AuthService.getCurrentUser();

    let email = currentUser.email;

    const [recharge, setRecharge] = useState([]);
    const [message, setMessage] = useState("");
    
    const getAllRecharge = () => {
        UserService.getRechargeById(email).then((response) => {
            setRecharge(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const getAllRechargeAsc = () => {
        UserService.getRechargeByIdAsc(email).then((response) => {
            setRecharge(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    useEffect(() => {
        
        getAllRecharge();  
    }, []);  // eslint-disable-line

    return (
        <>
        <div className = "container">
            <h2 className = "text-center"> Recharge History </h2>
            <div>Filter: <button className="btn btn-dark" onClick={() => getAllRecharge()}>Newest to Oldest</button> 
                    <button className="btn btn-dark" onClick={() => getAllRechargeAsc()}>Oldest to Newest</button>
                    <Link className="btn btn-info" to="/add-review" style = {{float: "right"}} >Review</Link></div>
            <br />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Recharge Type </th>
                        <th> Name </th>
                        <th> Mobile Number </th>
                        <th> Email </th>
                        <th> Recharge Plan </th>
                        <th> Recharge Price </th>
                        <th> Recharge Date </th>
                        <th> Valid Till </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recharge.map(
                            recharge =>
                            <tr key = {recharge.rechargeId}> 
                                <td> {recharge.rechargetype} </td>
                                <td> {recharge.name} </td>
                                <td> {recharge.mobile} </td>
                                <td> {recharge.email} </td> 
                                <td> {recharge.rechargePlan} </td>
                                <td><span>&#8377;</span>{recharge.rechargePrice}</td>
                                <td>{recharge.startDate}</td>
                                <td>{recharge.endDate}</td>
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

export default RecHistory;