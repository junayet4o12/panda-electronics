// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";


const Main = () => {
    return (
        <div>
            {/* bg-[#00000069] */}
            <div className="sticky top-0 z-40">
            <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;