import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Addons = () => {

    const [addons, setAddons] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {

        getAllAddons();
    }, []);

    
    const getAllAddons = () => {
        UserService.getAllRechargeAddons().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const getAllAddonsDesc = () => {
        UserService.getAllRechargeAddonsDesc().then((response) => {
            setAddons(response.data)
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
                <h2 className = "text-center"> Addon Plan </h2>
                <div>Price: <button className="btn btn-dark" onClick={() => getAllAddonsDesc()}>High to Low</button><div className="space"></div>
                        <button className="btn btn-dark" onClick={() => getAllAddons()}>Low to High</button>
                </div><br />
                {
                    addons.map(
                        addon => 
                        <div className="row product" key = {addon.addonId}>
                            <div className="col-md-5 product-details">
                                <strong>{addon.addonName}</strong><br />
                                <h3><span>&#8377;</span>{addon.addonPrice}</h3>
                                <strong>Channels: </strong>{addon.addonName}<br />
                                <strong>Details: </strong>{addon.addonDetails}
                            </div>
                            <div className="col-md-3 product-details">
                                <strong>Channels: </strong>{addon.addonName}<br />
                            </div>
                            <div className="col-md-3 product-details">
                                <strong>Validity: </strong> Avail till existing plan
                            </div>
                            <div className="col-md-1">
                                <Link className="btn btn-success" id="addOnsGrid1" to={`/recharge/addon/${addon.addonId}`} > <span>&#8377;</span>{addon.addonPrice} </Link>
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

export default Addons;