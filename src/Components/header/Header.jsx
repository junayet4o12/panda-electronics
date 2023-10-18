// import React from 'react';

import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/pandalogo.com.png'
const Header = () => {
    const navli = <>
        <li ><NavLink className='p-1.5' to='/'>Home</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5' to='/addproducts'>Add Product</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5' to='/mycart'>My Cart</NavLink></li>
        <hr />
        <li><NavLink className='p-1.5' to='/login'>Login</NavLink></li>

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
                        <a className="btn text-white border-none font-bold bg-[#6c0ed2] hover:bg-[#4f1091] ">Log In</a>
                    </div>
                </div>
                </div>
            </div>
        
    );
};

export default Header;