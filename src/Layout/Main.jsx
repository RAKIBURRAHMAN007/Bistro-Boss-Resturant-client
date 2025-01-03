import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className=' min-h-screen flex flex-col'>
            {noHeaderFooter || <NavBar></NavBar>}
            <div className="flex-grow">
                <Outlet />

            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;