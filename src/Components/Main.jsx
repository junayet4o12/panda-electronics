// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { useContext } from "react";
import { AuthContext } from "./Firebase.jsx/AuthProviders";
import { FaExchangeAlt } from 'react-icons/fa';
import { MdOutlineChangeCircle } from 'react-icons/md';
import './Maincomp.css'
// import 'Maincomp2.css'


const Main = () => {
    const { toggleTheme, theme } = useContext(AuthContext);

    
    return (
        <div>
            
            <div className="sticky top-0 z-40">
                <Header></Header>
            </div>
            <div className="sticky top-24    z-40">
                <div className=" absolute right-2">
                    <button onClick={toggleTheme} className={` p-1 rounded ${!theme ? 'text-black bg-white' : 'text-white bg-black'}   border-none text-sm font-bold flex flex-col justify-center items-center h-max py-2`}><span className={`${theme ? 'rotate':'rotate2'}   text-2xl`}><MdOutlineChangeCircle></MdOutlineChangeCircle></span> <span style={{writingMode: 'vertical-lr', }}>{!theme ? 'LIGHT' : 'DARK'}</span></button>
                </div>
            </div>
            <Outlet></Outlet>


        </div>
    );
};

export default Main;