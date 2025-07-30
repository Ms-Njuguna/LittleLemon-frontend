import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ReservationsPage from '../pages/ReservationsPage';
import OrderPage from '../pages/OrderPage';
import Dashboard from '../pages/Dashboard';
import OnlineMenu from '../pages/OnlineMenu';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/menu" element={<OnlineMenu />}/>
            <Route path="/reservation" element={<ProtectedRoute><ReservationsPage /></ProtectedRoute>} />
            <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
    )
};

export default AppRoutes;