import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaUtensilSpoon } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const DashBoard = () => {
    const [isAdmin]= UseAdmin();
    return (
        <div className='flex'>
            <div className='md:w-64 w-40 min-h-screen bg-orange-400'>
                <ul className='menu'>

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList></FaList>
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>
                                <div className='divider'></div>

                            </> :
                            <>
                                <li>

                                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHIstory">
                                        <FaCalendar></FaCalendar>
                                       Payment History</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                                <div className='divider'></div>

                            </>
                    }

                    {/* shared navlinks */}
                    <li>

                        <NavLink to='/'> <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>

                </ul>

            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;