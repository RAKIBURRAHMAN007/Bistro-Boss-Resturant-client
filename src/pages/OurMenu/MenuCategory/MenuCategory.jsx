import React from 'react';
import MenuItemCard from '../../PopularMenu/MenuItemCard';

const MenuCategory = ({items}) => {
    return (
        <div className=' w-11/12 mx-auto '>
               <div className='grid md:grid-cols-2 gap-8'>
                {
                    items.map(item => <MenuItemCard item={item}></MenuItemCard>)
                }

            </div>
            <div className='mt-7 flex justify-center'>
                <button className='btn btn-outline border-0 border-b-4 border-black text-black'>ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;