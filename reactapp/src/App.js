import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Profile from "./component/Profile/Profile";
import Addon from "./component/Addon/Addon";
import AddAddon from "./component/Addon/AddAddon";
import Premiumplans from "./component/Premiumplans/Premiumplans";
import AddPremiumplan from "./component/Premiumplans/AddPremiumplan";
import Monthly from "./component/Monthly/Monthly";
import AddMonthly from "./component/Monthly/AddMonthly";
import Popularplans from "./component/Popularplans/Popularplans";
import RechargePopularplans from "./component/Popularplans/RechargePopularplans";
import Addons from "./component/Addons/Addons";
import RechargeAddons from "./component/Addons/RechargeAddons";
import RecHistory from "./component/Recharge/RecHistory";
import Orders from "./component/Recharge/Orders";
import AddReview from "./component/Review/AddReview";
import Review from "./component/Review/Review";
import Error from "./component/Error/Error";
import ProtectedRoutesAdmin from "./component/Auth/ProtectedRoutesAdmin";
import ProtectedRoutesUser from "./component/Auth/ProtectedRoutesUser";

const App = () => {

  return (
    <>
      <Header />
      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/error" element={<Error />}/>
            <Route element={<ProtectedRoutesAdmin />}>
              <Route path="/addon" element={<Addon />} />
              <Route path="/add-addon" element={<AddAddon />} />
              <Route path="/addon/:id" element={<AddAddon />}/>
              <Route path="/premium-plan" element={<Premiumplans />} />
              <Route path="/add-premium" element={<AddPremiumplan />} />
              <Route path="/premium/:id" element={<AddPremiumplan />}/>
              <Route path="/monthly-plan" element={<Monthly />} />
              <Route path="/add-monthly" element={<AddMonthly />} />
              <Route path="/monthly/:id" element={<AddMonthly />}/>
              <Route path="/orders" element={<Orders />}/>
              <Route path="/review" element={<Review />}/>
            </Route>
            <Route element={<ProtectedRoutesUser />}>
              <Route path="/plan/popular" element={<Popularplans />}/> 
              <Route path="/recharge/plan/:id" element={<RechargePopularplans />}/>
              <Route path="/plan/addon" element={<Addons />}/>
              <Route path="/recharge/addon/:id" element={<RechargeAddons />}/>
              <Route path="/history" element={<RecHistory />}/>
              <Route path="/add-review" element={<AddReview />}/>
            </Route>
          </Routes>
      </div>
    </>
  );
};

export default App;