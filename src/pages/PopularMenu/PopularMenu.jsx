import React, { useEffect, useState } from 'react';
import MenuItemCard from './MenuItemCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {

        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <div className='lg:w-4/12 mx-auto'>
                <p className="text-center md:text-xl text-base text-yellow-600">---Check it out---</p>
                <div className="divider"></div>
                <h1 className="text-center font-bold md:text-4xl text-xl">FROM OUR MENU</h1>
                <div className="divider mb-10"></div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map(item => <MenuItemCard item={item}></MenuItemCard>)
                }

            </div>
            <div className='mt-7 flex justify-center'>
                <button className='btn btn-outline border-0 border-b-4 border-black text-black'>View Full  Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;