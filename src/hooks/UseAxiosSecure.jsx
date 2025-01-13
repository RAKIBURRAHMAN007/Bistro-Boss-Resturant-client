import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})
const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        console.log('requsedt stoped by', token)
        return config;
    }, function (error) {

        return Promise.reject(error);
    })




    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async(error)=> {
        const status = error.response.status;
        if(status === 401 || status===403){
            await logOut();
            navigate('/login');

        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    return axiosSecure;

};

export default UseAxiosSecure;