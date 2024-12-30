import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import About from './About/About';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;