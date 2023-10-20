// import React from 'react';
import banner from '../assets/banner.jpg'
const Banner = () => {

    return (
        <div className='text-white overflow-x-hidden'>
            <div className="hero min-h-screen" style={{ backgroundImage:` url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 sm:text-5xl text-3xl font-bold">PANDA ELECTRONICS</h1>
                        <p className="mb-5 text-sm font-semibold">Panda Electronics is a leading provider of high-quality electronic devices. We specialize in delivering innovative solutions that enhance your daily life. Experience the future of technology with Panda Electronics.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;