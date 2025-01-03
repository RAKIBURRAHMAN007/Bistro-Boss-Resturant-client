import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/NavBar';

const Main = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <NavBar></NavBar>
            <div className="flex-grow">
                <Outlet />

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;