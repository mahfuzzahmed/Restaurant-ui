import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { isAdmin, isAdminLoading } = useAdmin()
    const location = useLocation()
    const { user, loading } = useAuth()


    if (loading || isAdmin) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdminLoading) {
        return children
    }
    return <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;