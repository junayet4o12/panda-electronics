// import React from 'react';

import { Link, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';


import { EffectCube } from 'swiper/modules';
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const BrandProducts = () => {
    const loadeddata = useLoaderData();
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)
    const { id: brand } = useParams();


    const { id, name, img, banner1, banner2, banner3, title } = loadeddata;
    useEffect(() => {
        setloading(true)
        fetch(`https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/${name}`)
            .then(res => res.json())
            .then(data => {
                setproducts(data);
                setloading(false)
            })
    }, [])


    if (loading) {
        return <div className="h-[100vh] flex justify-center items-center"> <span className="loading loading-spinner text-primary"></span></div>
    }
    return (
        <div className="max-w-7xl mx-auto">

            <div>
                <div >

                    <div className={`overflow-hidden`}>
                        <Swiper className={`${products.length < 1 ? 'mt-[-1000px]' : ''}`}
                            modules={[Navigation, Scrollbar, A11y, EffectCube, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            effect="cube"

                            scrollbar={{ draggable: true }}
                            speed={1000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}

                        >
                            <SwiperSlide><img className="md:h-[580px] w-full" src={banner1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="md:h-[580px] w-full" src={banner2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="md:h-[580px] w-full" src={banner3} alt="" /></SwiperSlide>


                        </Swiper>
                    </div>

                    <div className={`${(products.length < 1) ? 'hidden' : 'block'}`}>
                        <h2 className="text-4xl font-bold text-center py-7">{title}s</h2>
                        <div className="flex flex-wrap justify-center items-center gap-7 my-10 p-4">
                            {
                                products.map(product => <div key={product?._id} className="shadow-lg shadow-black rounded-xl bg-gray-100">

                                    <div className="flex flex-col sm:flex-row">
                                        <div className="h-[200px] sm:h-[233px] w-[300px] sm:w-[350px] bg-no-repeat bg-cover bg-center rounded-xl rounded-b-md sm:rounded-r-none relative " style={{ backgroundImage: `Url(${product?.photo})` }}>
                                            <div className="w-full h-[60px] bg-[#00000082] rounded-b-md sm:rounded-r-none absolute bottom-0 px-2  overflow-x-hidden">
                                                <h4 className="text-white  text-base sm:text-lg font-bold w-max">{product?.name}</h4>
                                                <div className="flex justify-between items-center ">
                                                    <h5 className="text-white font-semibold">{product?.category}</h5>
                                                    <p className="text-2xl text-yellow-400">
                                                        <Rating
                                                            initialRating={product?.rating}
                                                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                                            fullSymbol={<AiFillStar></AiFillStar>}
                                                            readonly
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 flex flex-col justify-between pb-7 text-black">
                                            <div>
                                                <p className="text-xl font-bold "> Brand: {product?.brandname}</p>
                                                <p className=" font-bold ">Price: {product?.price} BDT</p>
                                                <p className="text-sm font-semibold max-w-[280px] sm:max-w-[400px]">{(product?.details?.length > 100) ? ((product?.details)?.slice(0, 100) + '....') : product?.details}</p>
                                            </div>
                                            <div className=" gap-4 sm:text-end px-4 mt-6">

                                                <Link to={`/details/${brand}/${product._id}`}><button className="btn btn-neutral mr-4">Details</button></Link>
                                                <Link to={`/update/${brand}/${product._id}`}><button className="btn btn-neutral mr-4">Update</button></Link>




                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${!(products.length < 1) ? 'hidden' : 'block'}`}
            >
                <div className="flex flex-col justify-center items-center gap-5 h-[100vh]">
                    <h2 className="text-9xl font-bold text-red-500"><FaRegFaceSadTear></FaRegFaceSadTear></h2>
                    <h2 className="text-5xl font-bold">Sorry!!!</h2>
                    <h2 className="text-2xl font-semibold">No Product Available</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;