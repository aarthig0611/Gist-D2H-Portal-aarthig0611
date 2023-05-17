import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthService from "../../services/auth.service";

const Header = () =>{

    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowUserBoard(user.userRole.includes("ROLE_USER"))
            setShowAdminBoard(user.userRole.includes("ROLE_ADMIN"))
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowUserBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    return(
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/home"} className="navbar-brand">
                    Gist-D2H
                </Link>
                <div className="navbar-nav mr-auto">

                {showUserBoard && (
                    <><li className="nav-item">
                    <Link to={"/plan/popular"} className="nav-link" id="userPopularPlans">
                        Popular Plans
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/plan/addon"} className="nav-link" id="userAddOns">
                        Addon Plans
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/history"} className="nav-link" id="notification">
                        Recharge History
                        </Link>
                    </li></>
                )}

                {showAdminBoard && (
                    <><li className="nav-item">
                    <Link to={"/addon"} className="nav-link" id="adminAddOns">
                        Addons
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/premium-plan"} className="nav-link" id="adminPremium">
                        Premium plans
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/monthly-plan"} className="nav-link" id="adminMonthlyPlans">
                        Monthly plans
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/orders"} className="nav-link" id="userOrders">
                        Recharge
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/review"} className="nav-link" id="userReviews">
                        Review
                    </Link>
                    </li></>
                )}

                </div>
                <div className="navbar-nav ms-auto">
                {currentUser ? (
                <>
                    <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                        Profile
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a href="/login" className="nav-link" id="logout" onClick={logOut}>
                        LogOut
                    </a>
                    </li>
                </>
                ) : (
                <>
                    <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to={"/signup"} className="nav-link">
                        Sign Up
                    </Link>
                    </li>
                </>
                )}
                </div>
            </nav>
        </>
    );
};

export default Header;