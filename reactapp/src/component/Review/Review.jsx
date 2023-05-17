import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'

const Review = () => {

    const [reviews, setReviews] = useState([]);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        UserService.getAllReview().then((response) => {
            setReviews(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            const resmsg = (error.response.data.message) || error.message || error.toString();
            setMessage(resmsg);
        })
    }, []);

    return (
        <>
        <div className = "container">
            <h2 className = "text-center"> Review </h2>
            <br /> 
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Id </th> 
                        <th> Email </th>
                        <th> Review Date </th>
                        <th> Comments </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(
                            review =>
                            <tr key = {review.reviewId}> 
                                <td> {review.reviewId} </td>
                                <td> {review.email} </td>
                                <td> {review.reviewdt}</td>
                                <td> {review.comments}</td>
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

export default Review;