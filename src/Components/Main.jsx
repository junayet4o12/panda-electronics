// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "./header/Header";


const Main = () => {
    return (
        <div>
            <div className="sticky top-0 z-40">
            <Header></Header>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;