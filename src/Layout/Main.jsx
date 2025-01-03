import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/NavBar';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    const location = useLocation();
    const isLoginOrRegisterPage = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div className=' min-h-screen flex flex-col'>
            {isLoginOrRegisterPage || <NavBar></NavBar>}
            <div className="flex-grow">
                <Outlet />   <ToastContainer />

            </div>
            {isLoginOrRegisterPage || <Footer></Footer>}
        </div>
    );
};

export default Main;