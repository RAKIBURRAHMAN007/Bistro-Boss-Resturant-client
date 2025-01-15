import React, { useContext } from 'react';
import UseAdmin from '../hooks/UseAdmin';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/shared/LoadingPage';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();
    console.log("Loading:", loading, "Admin Loading:", isAdminLoading, "User:", user, "Is Admin:", isAdmin);

    if (loading || isAdminLoading) {
        return <LoadingPage></LoadingPage>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default AdminRoute;