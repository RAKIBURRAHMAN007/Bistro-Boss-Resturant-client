import React from 'react';

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div>
            <div className="card bg-base-100 md:w-[310px] h-[450px] shadow-xl">
                <figure>
                    <img
                    className='h-48 w-full bg-cover'
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                    <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-4 border-orange-400 text-orange-400 bg-gray-300">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;