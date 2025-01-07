import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { axiosSecure } from '../hooks/UseAxiosSecure';
import UseCart from '../hooks/UseCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [,refetch] =UseCart();
    const handleAddToCart = food => {

        console.log(food)
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: `${location.pathname}` });
                }
            });

        }
    }
    return (
        <div>
            <div className=" bg-base-100   rounded-xl   shadow-xl">
                <figure>
                    <img
                        className=' w-full rounded-xl rounded-b-none bg-cover'
                        src={image} />
                </figure>
                <div className="p-3 space-y-2">
                    <h2 className="card-title text-base ">{name}

                    </h2>
                    <div className="badge badge-secondary ">${price}</div>
                    <p className='line-clamp-2 text-base'>{recipe}</p>
                    <div className="card-actions justify-end mb-3">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 text-orange-400 bg-gray-300">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;