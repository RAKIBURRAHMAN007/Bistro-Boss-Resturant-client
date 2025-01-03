import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import About from './About/About';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import TestiMonials from './Testimonials/TestiMonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className=''>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Home</title>
                
            </Helmet>
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