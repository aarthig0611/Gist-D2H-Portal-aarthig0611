import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const useAuth = () => {
    const user = AuthService.getCurrentUser();
    return (user.userRole.includes("ROLE_ADMIN")) ? true : false;
};

const ProtectedRoutesAdmin = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/error" />;
};

export default ProtectedRoutesAdmin;