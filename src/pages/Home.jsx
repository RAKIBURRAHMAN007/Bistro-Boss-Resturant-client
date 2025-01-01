import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import About from './About/About';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import TestiMonials from './Testimonials/TestiMonials';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;