import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import UseAxiosPublic from './UseAxiosPublic';

const UseMenu = () => {
    const axiosPublic = UseAxiosPublic();
        // const [menu, setMenu] = useState([]);
        // const [loading,setLoading] = useState(true)
        // useEffect(() => {
    
        //     fetch('http://localhost:5000/menu')
        //         .then(res => res.json())
        //         .then(data => {
        //             setMenu(data);
        //             setLoading(false);
        //         })
        // }, [])
        const{data: menu=[],refetch,isPending: loading}=useQuery({
            queryKey: ['menu'],
            queryFn: async()=>{
                const res = await axiosPublic.get('/menu');
                return res.data;

            }
        })
   return [menu,loading,refetch]
};

export default UseMenu;