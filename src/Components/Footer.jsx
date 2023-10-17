// import React from 'react';
import logo from '../assets/pandalogo.com.png';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='bg-[#141736] text-white'>
            <footer className=" p-7     flex flex-wrap gap-x-2 gap-y-7 max-w-7xl mx-auto">

                <aside className='w-full sm:w-[47%]  md:w-[40%] lg:w-[30%] '>
                    <img className='h-[150px]' src={logo} alt="" />
                    <p> Discover our range of cutting-edge electronic solutions, designed to simplify your life and keep you connected. </p>

                    <p className='flex gap-4 mt-4 items-center'>
                        <button className=' text-3xl text-blue-700 rounded border-none bg-white'><FaFacebookSquare></FaFacebookSquare></button>
                        <button className=' text-3xl text-red-500 rounded border-none bg-white'><BiLogoGmail></BiLogoGmail></button>
                        <button className=' text-3xl text-gray-700 rounded border-none bg-white'><FaXTwitter></FaXTwitter></button>
                        <button className=' text-4xl text-[#ff3f3f] rounded-md border-none bg-white h-[28px] w-max  flex justify-center items-center'><FaYoutube></FaYoutube></button>

                    </p>
                </aside>


                <div className='w-full  sm:w-[47%]  md:w-[25%] lg:w-[20%] '>
                    <nav className='sm:w-max mx-auto  flex flex-col gap-2'>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Best Quality</a>
                        <a className="link link-hover">Good Rate</a>
                        <a className="link link-hover">Customizable</a>
                    </nav>
                </div>

                <div className='w-full sm:w-[47%] md:w-[25%] lg:w-[20%]'>
                    <nav className='sm:w-max mx-auto  flex flex-col gap-2'>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                </div>
                <div className='w-full sm:w-[47%]   md:w-[30%] lg:w-[20%]'>
                    <nav className='sm:w-max mx-auto  flex flex-col gap-2'>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Panda Electronics</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;