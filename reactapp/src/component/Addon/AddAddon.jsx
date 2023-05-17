import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service'
import AddonPlan from '../../model/AddonPlan';
import errors from '../../services/errors';

const AddAddon = () => {

    const [addonName, setAddonName] = useState('');
    const [addonPrice, setAddonPrice] = useState('');
    const [addonDetails, setAddonDetails] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateAddon = (e) => {
        e.preventDefault();

        const addon = new AddonPlan(addonName, addonPrice, addonDetails);

        if(id){
            UserService.updateAddon(id, addon).then((response) => {
                console.log(response.data)
                navigate('/addon')
            }).catch(error => {
                console.log(error)
                const resmsg = (error.response.data.message) || error.message || error.toString();
                setMessage(resmsg);
            })

        }else{
            UserService.createAddon(addon).then((response) =>{

                console.log(response.data)
    
                navigate('/addon');
    
            }).catch(error => {
                console.log(error)
                const resmsg = (errors.response) || error.message || error.toString();
                setMessage(resmsg);
            })
        }
        
    };

    useEffect(() => {

        UserService.getAddonById(id).then((response) =>{
            setAddonName(response.data.addonName)
            setAddonPrice(response.data.addonPrice)
            setAddonDetails(response.data.addonDetails)
        }).catch(error => {
            console.log(error)
            if(id){
                const resmsg = (error.response.data.message) || error.message || error.toString();
                setMessage(resmsg);
            }
        });
    }, []);  // eslint-disable-line

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Addon</h2>
        }else{
            return <h2 className = "text-center">Add Addon</h2>
        }
    };

    return (
        <>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Addon Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Addon name"
                                        name = "addonName"
                                        className = "form-control"
                                        value = {addonName}
                                        onChange = {(e) => setAddonName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Addon Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Addon Price"
                                        name = "addonPrice"
                                        className = "form-control"
                                        value = {addonPrice}
                                        onChange = {(e) => setAddonPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Addon Details :</label>
                                    <textarea
                                        placeholder = "Enter Addon Details"
                                        name = "addonDetails"
                                        className = "form-control"
                                        rows="3"
                                        value = {addonDetails}
                                        onChange = {(e) => setAddonDetails(e.target.value)}
                                    >
                                    </textarea>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateAddon(e)} >Submit </button>
                                <Link to="/addon" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
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

export default AddAddon;