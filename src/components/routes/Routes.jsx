import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import CommonLayout from '../../pages/commonLayout/CommonLayout';
import Home from '../home/Home';
import BookMeal from '../../pages/bookyourmeal/BookMeal';
import Authmodal from '../../pages/authmodal/Authmodal';
import SignupForm from '../signupForm/SignupForm';
import LoginForm from '../loginForm/LoginForm';
import AdminDashboard from '../../pages/adminDashboard/AdminDashboard';
import CustomSnackbar from '../snackbar/Snackbar';
import CarrotImage from '../../assets/carrot.png';
import FullPlateFood from '../../assets/full-plate.png';

const AllRoutes = () => {
  return (
    <Router>
        <CustomSnackbar />
        {
            localStorage.getItem("memberToken")
            ?
            <>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<CommonLayout component={<Home />} />} />
                    <Route exact path="/bookyourmeal" element={<CommonLayout component={<BookMeal />} />} />
                    <Route exact path="/dashboard" element={<CommonLayout component={<AdminDashboard />} />} />
                </Routes>
            </>
            :
            <>
                <Routes>
                    <Route exact path="/" element={<Authmodal image={CarrotImage} component={<LoginForm />} />} />
                    <Route exact path="/signup" element={<Authmodal image={FullPlateFood} component={<SignupForm />} />} />
                </Routes>
            </>
        }
    </Router>
  );
}

export default AllRoutes;