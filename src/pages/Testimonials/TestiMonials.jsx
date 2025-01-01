import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
const TestiMonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto mt-28'>
            <div className='lg:w-4/12 mx-auto'>
                <p className="text-center md:text-xl text-base text-yellow-600">---What Our Clients Say---</p>
                <div className="divider"></div>
                <h1 className="text-center font-bold md:text-4xl text-xl">TESTIMONIALS</h1>
                <div className="divider mb-2"></div>
            </div>
            <div >
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide>
                            <div className='flex flex-col items-center my-16 mx-20'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    
                                />
                                <img className='mt-3' src="https://img.icons8.com/?size=100&id=38968&format=png&color=000000" alt="" />
                                <p className='py-5'>{review.details}</p>
                                <h3 className='text-orange-400 text-center'>{review.name}</h3>
                            </div>





                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default TestiMonials;