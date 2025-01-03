import React from 'react';
import { Helmet } from "react-helmet";
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import UseMenu from '../../hooks/UseMenu';
import MenuCategory from './MenuCategory/MenuCategory';

const OurMenu = () => {
    const [menu,loading] = UseMenu();
    const deserts = menu.filter(item=> item.category === 'dessert');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const soup = menu.filter(item=> item.category === 'soup');
    const offered = menu.filter(item=> item.category === 'offered');
    console.log(deserts,pizza,salad,soup,offered)
    return (
        <div className='space-y-28'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
            <div className='lg:w-4/12 mx-auto'>
                <p className="text-center md:text-xl text-base text-yellow-600">---Don't miss---</p>
                <div className="divider"></div>
                <h1 className="text-center font-bold md:text-4xl text-xl">TODAY'S OFFER</h1>
                <div className="divider mb-10"></div>
            </div>

            <MenuCategory items={offered}></MenuCategory>

        

            <Cover img={desertImg} title={'DESSERTS'} description={'At Bistro Boss, our desserts are crafted to delight—rich, creamy, and bursting with flavor. From classic treats to unique creations, every bite is pure indulgence!'}></Cover>

            <MenuCategory items={deserts}></MenuCategory>

            <Cover img={pizzaImg} title={'PIZZA'} description={'Craving the perfect pizza? Bistro Boss serves up crispy crusts, flavorful sauces, and the freshest toppings, crafted to deliver a mouthwatering experience in every bite!'}></Cover>

            <MenuCategory items={pizza}></MenuCategory>

            <Cover img={saladImg} title={'SALADS'} description={'Freshness meets flavor in our salads at Bistro Boss. Packed with crisp greens, vibrant veggies, and delicious dressings, every bowl is a wholesome and satisfying delight!'}></Cover>

            <MenuCategory items={salad}></MenuCategory>

            <Cover img={soupImg} title={'SOUPS'} description={'Warm, comforting, and full of flavor—our soups at Bistro Boss are crafted to nourish and delight. Each bowl is a perfect blend of fresh ingredients and heartwarming goodness'}></Cover>

            <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default OurMenu;