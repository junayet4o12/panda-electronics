import React, { useContext } from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand/Brand";
import Footer from "./Footer";
import Services from "./Services";
import ContactUs from "./ContactUs";
import { AuthContext } from './Firebase.jsx/AuthProviders';

const Home = () => {
    
    const loadedbrands = useLoaderData();
    const {theme } = useContext(AuthContext)
    

    return (
        <div className={`${theme ? 'text-black' : 'text-white'}`}>
           
            <Banner></Banner>
            <Brand loadedbrands={loadedbrands} theme={theme}></Brand>
            <Services theme={theme}></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;