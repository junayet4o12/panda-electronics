// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/pandalogo.com.png'
import { AuthContext } from "../Firebase.jsx/AuthProviders";
import { useContext } from "react";
import userimg from '../../assets/pandaface.webp'
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RxHome } from 'react-icons/rx';
const Header = () => {
    const {theme} = useContext(AuthContext)
    const { user, logout } = useContext(AuthContext);
  
    
    const navli = <>
        <li ><NavLink className='p-1.5 hover:underline flex  items-center gap-1' to='/'><RxHome></RxHome>Home</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline' to='/addproducts'>Add Product</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline' to='/mycart'>My Cart</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5 hover:underline flex  items-center gap-1' to='/login '><MdOutlineLogin></MdOutlineLogin><span>Login</span></NavLink></li>

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
                            <img className="h-[50px] sm:h-[80px] md:h-[70px]" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="flex justify-center items-center gap-3 px-1 activelink">
                            {navli}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <div className="flex gap-1 justify-center items-center">
                            {
                                user ? <>
                                    <div className='mr-2  flex flex-col justify-center items-center'>
                                        <div className='w-10 h-10 rounded-full bg-white overflow-hidden'>
                                            <img className="w-full h-full" src={user.photoURL ? user.photoURL : userimg} alt="" />
                                         </div>
                                        <p className='text-white font-bold font-sm hidden sm:block'>{user?.displayName?.split(' ')[0] || 'Undefined'}</p>
                                    </div>
                                    <p onClick={() => logout()} className={`btn flex flex-col justify-center items-center   w-max   font-bold border-none bg-[#b23b3b] text-white hover:bg-[#d33333] gap-1`}><span>logOut</span><span className="text-lg"><RiLogoutBoxLine></RiLogoutBoxLine></span></p>

                                </> : <Link to='/register'>
                                    <button className="btn btn-primary text-white font-bold border-none flex flex-col justify-center items-center gap-1"><span>Register</span><span className="text-lg"><MdAppRegistration></MdAppRegistration></span></button>
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