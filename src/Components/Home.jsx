// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand/Brand";

const Home = () => {
    const loadedbrands = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Brand loadedbrands={loadedbrands}></Brand>
        </div>
    );
};

export default Home;