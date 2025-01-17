import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import { useForm } from 'react-hook-form';
const imgHostingKey = import.meta.env.VITE_imgHostingKey;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
const UpdateItem = () => {
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const {name, category, recipe, price, _id} = useLoaderData();
 
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgHostingApi, imgFile, {

            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            // console.log(menuResponse.data)
            if (menuResponse.data.modifiedCount>0) {
                // show success popup
              
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }

        console.log('with image url', res.data);

    }
    return (
        <div className='lg:w-11/12 mx-auto'>
            <div className='lg:w-4/12 mx-auto mt-4'>
                <p className="text-center md:text-xl text-base text-yellow-600">---Update---</p>
                <div className="divider"></div>
                <h1 className="text-center font-bold md:text-4xl text-xl">Update A Items</h1>
                <div className="divider mb-10"></div>
               
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            defaultValue={name}
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" defaultValue={recipe} placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;