import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';


const UseCart = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const {refetch,data: cart=[] }= useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }


    })
    return [cart,refetch];
   
};

export default UseCart;