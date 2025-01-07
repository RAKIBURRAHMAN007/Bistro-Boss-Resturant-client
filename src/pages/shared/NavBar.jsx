import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UseCart from '../../hooks/UseCart';


const NavBar = () => {
    const location = useLocation();
    const [active, setActive] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();
   

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/ourMenu'>OUR-MENU</NavLink></li>
        <li><NavLink to='/order'>Order-Food</NavLink></li>
        <li><NavLink to='/aboutUs'>About-Us</NavLink></li>
        {/* {
            user && <li><Link to='/myProfile'>My-Profile</Link></li>


        } */}

    </>
    return (

        <div className={`navbar fixed z-30 text-white bg-black bg-opacity-30 `}>
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black  text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-base md:text-2xl border bg-black bg-opacity-10">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl ">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user && <button className="btn mr-2">
                        <img className='w-6' src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000" alt="" />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                }

                {
                    user ? <Link onClick={logOut} className='btn font-bold md:text-xl'>Logout</Link> : <Link to='/login' className='btn font-bold md:text-xl'>Login</Link>

                }













            </div>



        </div>

    );
};

export default NavBar;