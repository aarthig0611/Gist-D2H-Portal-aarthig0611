import React, { useState} from "react";
import {useNavigate} from 'react-router-dom';

import AuthService from "../../services/auth.service";

const Signup = () =>{
    const [input, setInput] = useState({
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        AuthService.register(input.email, input.username, input.mobileNumber, input.password).then(
            (response) =>{

                console.log(response.data)
                setMessage(response.data.message);
                setSuccessful(true);
                alert("Registered Successfully");
                navigate('/login');
            },
            (err) => {
                const resMessage =
                  (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                  err.message ||
                  err.toString();
      
                setMessage(resMessage);
                setSuccessful(false);
            }
            
        )
        
    }

    const onInputChange = (e) =>{
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = (e) =>{
        let {name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: ""};
            switch(name){
                case "email":
                    if(!value){
                        stateObj[name] = "Please enter Email";
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                        stateObj[name] = "Invalid email address";
                    }
                    break;
                
                case "username":
                    if(!value){
                        stateObj[name] = "Please enter Username";
                    }
                    break;
                
                case "mobileNumber":
                    if(!value){
                        stateObj[name] = "Please enter Mobile number";
                    }else if (!(value.match('[0-9]{10}'))){
                        stateObj[name] = "Invalid Mobile number";
                    }
                    break;
                
                case "password":
                    if(!value){
                        stateObj[name] = "Please enter Password";
                    }else if (input.confirmPassword && value !== input.confirmPassword){
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match";
                    }else{
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if(!value){
                        stateObj[name] = "Please enter Confirm Password";
                    }else if (input.password && value !== input.password){
                        stateObj[name] = "Password and Confirm Password does not match";
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        })
    }

    return(
        <>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Register</h2>
                        <div className = "card-body">
                            <form>
                                { !successful && (
                                    <><div className="form-group mb-2">
                                            <label className="form-label"> Email :</label>
                                            <input type='email' className="form-control" name='email' id='email' placeholder='Enter email' value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.email && <div className="text-danger" role="alert">{error.email}</div>}
                                        </div><div className="form-group mb-2">
                                            <label className="form-label"> Username :</label>
                                            <input type='text' className="form-control" name='username' id='username' placeholder='Enter Username' value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.username && <div className="text-danger" role="alert">{error.username}</div>}
                                        </div><div className="form-group mb-2">
                                            <label className="form-label"> Mobile Number :</label>
                                            <input type='text' className="form-control" name='mobileNumber' id='mobileNumber' placeholder='Enter MobileNumber ' value={input.mobileNumber} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.mobileNumber && <div className="text-danger" role="alert">{error.mobileNumber}</div>}
                                        </div><div className="form-group mb-2">
                                            <label className="form-label"> Password :</label>
                                            <input type='password' className="form-control" name='password' id='password' placeholder='Password' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.password && <div className="text-danger" role="alert">{error.password}</div>}
                                        </div><div className="form-group mb-2">
                                            <label className="form-label"> Confirm Password :</label>
                                            <input type='password' className="form-control" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.confirmPassword && <div className="text-danger" role="alert">{error.confirmPassword}</div>}
                                        </div><div className="form-group mb-2">
                                            <center><button className="btn btn-success" id='submitButton' onClick={(e) => saveOrUpdateUser(e)}>Submit</button></center>
                                        </div><div className="form-group mb-2">
                                            <center><p>Already a User?<a id='signinLink' href="/login">Login</a></p></center>
                                        </div></>
                                )}
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

export default Signup;

