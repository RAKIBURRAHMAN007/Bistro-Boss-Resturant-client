import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutFrom from './CheckOutFrom';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='lg:w-4/12 mx-auto mt-4'>
                <p className="text-center md:text-xl text-base text-yellow-600">---Payment---</p>
                <div className="divider"></div>
                <h1 className="text-center font-bold md:text-4xl text-xl">Please Pay To Eat</h1>
                <div className="divider mb-10"></div>

            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>

                </Elements>

            </div>


        </div>
    );
};

export default Payment;