/* eslint-disable react/prop-types */
// import React from 'react';


import { useContext } from "react";
import Brands from "./Brands";
import { AuthContext } from "../Firebase.jsx/AuthProviders";

const Brand = ({loadedbrands}) => {
    const {theme} = useContext(AuthContext)
    
    return (
        <div>
            <h2 className="text-5xl font-bold text-center pt-7">Product&apos;s Brands</h2>
            <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center mx-auto text-sm font-semibold pt-4 pb-7">Panda Electronics is your trusted technology partner. We offer user-friendly, innovative products that make your life easier and your business more efficient. Discover the future of tech with us today!</p>
           <div className="my-7 flex flex-wrap justify-center items-center gap-10">
            {
                loadedbrands?.map(brand=> <Brands key={brand?.id} brand={brand} theme={theme}></Brands>)
            }
            </div> 
        </div>
    );
};

export default Brand;