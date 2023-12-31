/* eslint-disable react/prop-types */
// import React from 'react';
import bg from '../assets/servicesbg.jpg'
import { GiAutoRepair } from 'react-icons/gi';
import { FcSupport, FcCustomerSupport } from 'react-icons/fc';
import { RiUninstallFill, RiDeviceRecoverLine } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsLifePreserver } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from './Firebase.jsx/AuthProviders';
const Services = () => {
    const {theme} = useContext(AuthContext);
    return (
        <div className="max-w-7xl mx-auto py-14">

            <div className="w-full bg-center bg-cover " style={{ backgroundImage: `url(${bg})` }}>
                <div className={`${!theme ? 'bg-[#0000004f]' : 'bg-[#ffffff4c]'}`}>
                    <h2 className="text-4xl font-bold text-center pt-7 mb-4 ">Our Services</h2>
                    <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center mx-auto text-sm font-semibold pt-4 pb-7 ">We empower you with advanced tech solutions. From expert support to tailored services, we&apos;re your tech partner. Contact us to elevate your digital journey today.</p>
                    <div className='p-5 flex flex-wrap justify-center items-center gap-10'>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><GiAutoRepair></GiAutoRepair></h1>
                            <h2 className='text-xl font-bold text-center '>Product Repairing</h2>
                        </div>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><FcCustomerSupport></FcCustomerSupport></h1>
                            <h2 className='text-xl font-bold text-center '>Technical Support</h2>
                        </div>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><RiUninstallFill></RiUninstallFill></h1>
                            <h2 className='text-xl font-bold text-center '>Product Installation</h2>
                        </div>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><HiOutlineLightBulb></HiOutlineLightBulb></h1>
                            <h2 className='text-xl font-bold text-center '>Customized Solutions</h2>
                        </div>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><BsLifePreserver></BsLifePreserver></h1>
                            <h2 className='text-xl font-bold text-center '>Maintenance and Upkeep</h2>
                        </div>
                        <div className={`w-[280px] h-[220px]   shadow-xl  cursor-pointer  flex flex-col justify-center items-center gap-3  rounded-lg ${theme ? 'bg-[#fff5] hover:bg-[#fff9]' : 'bg-[#0005] hover:bg-[#0009]'}`}>
                            <h1 className='text-7xl font-bold text-center '><RiDeviceRecoverLine></RiDeviceRecoverLine></h1>
                            <h2 className='text-xl font-bold text-center '>Data Recovery Services</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;