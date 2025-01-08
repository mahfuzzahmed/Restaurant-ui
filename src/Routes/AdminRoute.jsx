import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    const { user, loading } = useAuth()


    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    // console.log(isAdmin,"from private admin", user)
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;