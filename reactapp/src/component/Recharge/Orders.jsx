import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'

const Orders = () => {

    const [recharge, setRecharge] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        
        getAllRecharge();  
    }, []);
    
    const getAllRecharge = () => {
        UserService.getRecharge().then((response) => {
            setRecharge(response.data)
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
            <h2 className = "text-center"> Recharge </h2>   
            <br />       
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Id</th>
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
                                <td> {recharge.rechargeId} </td>
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

export default Orders;