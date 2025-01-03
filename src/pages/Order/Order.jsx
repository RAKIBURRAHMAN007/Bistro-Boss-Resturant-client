import React, { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import FoodCard from '../../components/FoodCard';
import { Helmet } from 'react-helmet';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu, loading] = UseMenu();
    const deserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div className='space-y-28 '>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Order</title>
                
            </Helmet>
            <Cover img={orderImg} title={'Order Food'} description={'Order your favorites effortlessly at Bistro Boss and enjoy a delicious meal in no time!'} ></Cover>

            <div className='w-11/12 mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab >Salad</Tab>
                        <Tab >Pizza</Tab>
                        <Tab >Soups</Tab>
                        <Tab >Desserts</Tab>
                        <Tab >Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-24'>
                            {
                                salad.map(item => <FoodCard item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-24'>
                            {
                                pizza.map(item => <FoodCard item={item}></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-24'>
                            {
                                soup.map(item => <FoodCard item={item}></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-24'>
                            {
                               deserts.map(item => <FoodCard item={item}></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-24'>
                            {
                               drinks.map(item => <FoodCard item={item}></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;