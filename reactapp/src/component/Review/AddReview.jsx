import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";
import Feedback from '../../model/Feedback';
import errors from '../../services/errors';

const AddReview = () => {

    const currentUser = AuthService.getCurrentUser();

    const navigate = useNavigate();

    const [comments, setComments] = useState('');
    const [message, setMessage] = useState("");
    const [email] = useState(currentUser.email);

    const saveReview = (e) => {
        e.preventDefault();

        let reviewdt = new Date().toLocaleString();

        const review = new Feedback(email, reviewdt, comments);

            UserService.createReview(review).then((response) =>{

                console.log(response.data)
                alert("Thankyou for the feedback...!");
    
                navigate('/home');
    
            }).catch(error => {
                console.log(error.response.data);
                const resmsg = (errors.response) || error.message || error.toString();
                setMessage(resmsg);
            })
        
    };

    return (
        <>
           <br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Review</h2>
                        <div className = "card-body">
                            <form>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        readOnly
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Comments :</label>
                                    <textarea
                                        placeholder = "Enter Recharge Price"
                                        name = "comments"
                                        className = "form-control"
                                        rows="3"
                                        value = {comments}
                                        onChange = {(e) => setComments(e.target.value)}
                                    >
                                    </textarea>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveReview(e)} >Submit </button>
                                <Link to="/history" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
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

export default AddReview;