import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <div className="w-11/12 mx-auto mt-24">
            <p className="text-center md:text-xl text-base text-yellow-600">--From 8:00am to 10:00pm--</p>
            <div className="divider"></div>
            <h1 className="text-center font-bold md:text-4xl text-xl">Order Online</h1>
            <div className="divider mb-10"></div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-auto" src={slide1} alt="Slide 1" />
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs md:text-2xl font-bold py-2">
                            Salads
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-auto" src={slide2} alt="Slide 2" />
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs md:text-2xl font-bold py-2">
                            pizza
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-auto" src={slide3} alt="Slide 3" />
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs md:text-2xl font-bold py-2">
                        Soups
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-auto" src={slide4} alt="Slide 4" />
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs md:text-2xl font-bold py-2">
                              Desserts
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-auto" src={slide5} alt="Slide 5" />
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs md:text-2xl font-bold py-2">
                            Drinks
                        </h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
