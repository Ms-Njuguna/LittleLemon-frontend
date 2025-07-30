import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';

const ProtectedRoute = ({children}) => {
    //checks if user is logged in, if not navigates to login page
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;