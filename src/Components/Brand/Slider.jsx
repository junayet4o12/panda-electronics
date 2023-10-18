/* eslint-disable react/prop-types */
// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';


import { EffectCube } from 'swiper/modules';
const Slider = ({banner}) => {
    const { id, name, img, banner1, banner2, banner3, title } = banner;
    return (
        <div>
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
        </div>
    );
};

export default Slider;