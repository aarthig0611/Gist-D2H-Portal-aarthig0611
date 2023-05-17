import React from "react";
import AuthService from "../../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <>
      <div className="col-md-12">
        <div className="card card-container">
          <center><h3>Profile</h3></center>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Username:</strong> {currentUser.username}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p>
            <strong>Mobile Number:</strong> {currentUser.mobileNumber}
          </p>
        </div>
      </div>
    </>
  );
  
};

export default Profile;