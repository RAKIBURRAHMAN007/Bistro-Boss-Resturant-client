import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';

const UseAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: isAdmin,isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn: async()=>{
            const res =await axiosSecure.get(`/user/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin;

        }
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;