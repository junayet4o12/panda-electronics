// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/pandalogo.com.png'
import { AuthContext } from "../Firebase.jsx/AuthProviders";
import { useContext } from "react";
import userimg from '../../assets/pandalogo.com.png'
const Header = () => {
    const { user, logout } = useContext(AuthContext);
  
    
    const navli = <>
        <li ><NavLink className='p-1.5 hover:underline' to='/'>Home</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline' to='/addproducts'>Add Product</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline' to='/mycart'>My Cart</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline' to='/login'>Login</NavLink></li>

    </>
    return (

        <div className="relative">
            <div className="">
                <div className="navbar  text-white absolute bg-[#00000069]">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-[#00000069] rounded-box w-max activelink flex flex-col justify-start gap-2">
                                {navli}
                            </ul>
                        </div>
                        <a className="normal-case text-xl">
                            <img className="h-[80px]" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="flex gap-4 px-1 activelink">
                            {navli}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <div className="flex gap-1 justify-center items-center">
                            {
                                user ? <>
                                    <div className='mr-5  flex flex-col justify-center items-center'>
                                        <div className='w-10 h-10 rounded-full bg-white overflow-hidden'>
                                            <img className="w-full h-full" src={user.photoURL ? user.photoURL : userimg} alt="" />
                                         </div>
                                        <p className='text-white font-bold font-sm'>{user?.displayName?.split(' ')[0] || 'Undefined'}</p>
                                    </div>
                                    <button onClick={() => logout()} className="btn btn-primary text-white font-bold border-none px-5">log out</button>

                                </> : <Link to='/login'>
                                    <button className="btn btn-primary text-white font-bold border-none px-5">log in</button>
                                </Link>

                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;