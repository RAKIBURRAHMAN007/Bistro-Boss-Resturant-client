import React from 'react';

const MenuItemCard = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className='flex space-x-2 md:space-x-4 border-2 p-1'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='lg:w-28 w-20 h-20 border ' src={image} alt="" />
            <div>
                <h3 className='uppercase font-semibold'>{name}--------------</h3>
                <p className='opacity-65'>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItemCard;