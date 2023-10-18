// import React from 'react';

import { useLoaderData } from "react-router-dom";
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
const BrandProducts = () => {
    const loadeddata = useLoaderData();
    const [products, setproducts] = useState([]);
    const { id, name, img, banner1, banner2, banner3, title } = loadeddata;
   useEffect(()=> {
    fetch(`http://localhost:3000/${name}`)
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
    })
   },[])
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <div >

                    <div className="overflow-hidden">
                        <Swiper
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

                    <div>
                        <h2>{title}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;