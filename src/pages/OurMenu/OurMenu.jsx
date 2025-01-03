import React from 'react';
import { Helmet } from "react-helmet";
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const OurMenu = () => {
    return (
        <div className='space-y-14'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>

        

            <Cover img={desertImg} title={'DESSERTS'} description={'At Bistro Boss, our desserts are crafted to delight—rich, creamy, and bursting with flavor. From classic treats to unique creations, every bite is pure indulgence!'}></Cover>

            <Cover img={pizzaImg} title={'PIZZA'} description={'Craving the perfect pizza? Bistro Boss serves up crispy crusts, flavorful sauces, and the freshest toppings, crafted to deliver a mouthwatering experience in every bite!'}></Cover>

            <Cover img={saladImg} title={'SALADS'} description={'Freshness meets flavor in our salads at Bistro Boss. Packed with crisp greens, vibrant veggies, and delicious dressings, every bowl is a wholesome and satisfying delight!'}></Cover>

            <Cover img={soupImg} title={'SOUPS'} description={'Warm, comforting, and full of flavor—our soups at Bistro Boss are crafted to nourish and delight. Each bowl is a perfect blend of fresh ingredients and heartwarming goodness'}></Cover>
        </div>
    );
};

export default OurMenu;