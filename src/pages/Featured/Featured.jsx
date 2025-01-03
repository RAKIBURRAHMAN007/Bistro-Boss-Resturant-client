import React from 'react';
import featuredImg from '../../assets/home/featured.jpg'
import { Link } from 'react-router-dom';
const Featured = () => {
    return (
        <div className='w-11/12 mx-auto mt-28 bg-fixed text-white ' style={{ backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-black bg-opacity-35 p-4'>
                <div className='lg:w-4/12 mx-auto'>
                    <p className="text-center md:text-xl text-base text-yellow-500">---Check it out---</p>
                    <div className="border-t border-white mt-2 p-2"></div>
                    <h1 className="text-center font-bold md:text-4xl uppercase text-xl">Featured Items</h1>
                    <div className="border-t border-white mb-10  mt-4 "></div>
                </div>
                <div className='md:flex justify-center items-center py-8 px-16 gap-4'>
                    <div>
                        <img src={featuredImg} alt="" />

                    </div>
                    <div className='space-y-3'>
                        <p>March 20, 2025</p>
                        <p className='uppercase'>
                            WHERE CAN I GET SOME?
                        </p>
                        <p>
                            "Explore our exclusive collection of featured items, thoughtfully curated to showcase exceptional quality and design. These top picks are perfect for adding a touch of style and uniqueness to your experience. Don’t miss out on discovering something truly special!
                        </p>
                        <Link to='/order'><button className='btn btn-outline border-0 border-b-4 border-white text-white'>Order Now</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;