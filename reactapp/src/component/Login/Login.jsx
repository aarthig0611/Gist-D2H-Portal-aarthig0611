import React, { useState} from "react";
import {useNavigate} from 'react-router-dom';

import AuthService from "../../services/auth.service";

const Login = () =>{
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        AuthService.login(input.email, input.password).then(
            (response) =>{

                navigate("/profile");
                window.location.reload();
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

    const onInputChange= e =>{
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e =>{
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
                
                case "password":
                    if(!value){
                        stateObj[name] = "Please enter Password";
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
                    <h2 className = "text-center">Login</h2>
                        <div className = "card-body">
                            <form>
                                { !successful && (
                                    <><div className="form-group mb-2">
                                            <label className="form-label"> Email :</label>
                                            <input type='email' className="form-control" name='email' id='email' placeholder='Enter email' value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.email && <div className="text-danger" role="alert">{error.email}</div>}
                                        </div><div className="form-group mb-2">
                                            <label className="form-label"> Password :</label>
                                            <input type='password' className="form-control" name='password' id='password' placeholder='Password' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                                            {error.password && <div className="text-danger" role="alert">{error.password}</div>}
                                        </div><div className="form-group mb-2">
                                            <center><button className="btn btn-success" id="loginButton" onClick={(e) => handleLogin(e)}>Login</button></center>
                                        </div><div className="form-group mb-2">
                                        <center><p>New User/admin?<a id='signupLink' href="/signup">Sign up</a></p></center>
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

export default Login;

