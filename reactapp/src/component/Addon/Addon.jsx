import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user.service'

const Addon = () => {

    const [addons, setAddons] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {

        getAllAddons();
    }, []);

    
    const getAllAddons = () => {
        UserService.getAllAddons().then((response) => {
            setAddons(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    };

    const deleteByAddon = (addonId) => {
       UserService.deleteAddon(addonId).then((response) =>{
          getAllAddons();
       }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
       })
        
    };

    return (
        <>
        <div className = "container">
            <h2 className = "text-center"> Addons </h2>
            <Link to = "/add-addon" className = "btn btn-primary mb-2" id="addAddOn"> Add Addons </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Plan Type</th>
                        <th> Plan Name </th>
                        <th> Plan Price </th>
                        <th> Details </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addons.map(
                            addon =>
                            <tr key = {addon.addonId}> 
                                <td> AddOn </td>
                                <td> {addon.addonName} </td>
                                <td><span>&#8377;</span>{addon.addonPrice}</td>
                                <td>{addon.addonDetails}</td>
                                <td><Link className="btn btn-info" id="editAddOnPlan" to={`/addon/${addon.addonId}`} >Update</Link></td>
                                <td><button className = "btn btn-danger" id="deleteAddOnPlan" onClick = {() => deleteByAddon(addon.addonId)}> Delete</button></td>
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

export default Addon;