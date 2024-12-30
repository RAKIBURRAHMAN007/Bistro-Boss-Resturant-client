import React from 'react';
import img from '../../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div className="w-11/12 mx-auto mt-28 mb-48">
            <div 
                className="relative bg-cover bg-center bg-no-repeat p-6 md:p-10 mx-10 md:mx-28 mt-14 md:mt-28 mb-24"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="bg-white p-6 md:p-10">
                    <h1 className="text-center font-bold text-xl md:text-3xl ">Bistro Boss</h1>
                    <p className="text-center text-sm md:text-base ">
                        BB is an online food ordering platform offering a variety of dishes, including salads, pizzas, soups, desserts, and drinks.
                        With an easy-to-use interface, customers can browse categories and place orders quickly.
                        Available from 8:00 AM to 10:00 PM, Bistro Boss provides a seamless and enjoyable online ordering experience for all food lovers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
