// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand/Brand";
import Footer from "./Footer";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home = () => {
    const loadedbrands = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Brand loadedbrands={loadedbrands}></Brand>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;