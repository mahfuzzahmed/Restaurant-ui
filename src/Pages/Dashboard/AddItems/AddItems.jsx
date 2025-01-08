import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import MenuItem from '../../Shared/MenuItem';
import Swal from 'sweetalert2';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log(menuItem)
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <SectionTitle heading={'whats new'} subheading={'Add an Item'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name</span>
                    </label>
                    <input {...register('recipe')}
                        type="text"
                        placeholder="Recipe Name"
                        className="input input-bordered w-full " />

                </div>
                <div className='flex gap-6'>

                    {/* category */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register('price')}
                            type="text"
                            placeholder="Price"
                            className="input input-bordered w-full " />
                    </div>
                    {/* price */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={'default'} {...register('category')}
                            className="select select-bordered w-full">
                            <option disabled value="default">Category</option>
                            <option value="salad">salad</option>
                            <option value="pizza">pizza</option>
                            <option value="soup">soup</option>
                            <option value="deserts">deserts</option>
                            <option value="drinks">drinks</option>
                        </select>
                    </div>


                </div>

                {/* recipe details */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea
                        {...register('recipe')}
                        className="textarea textarea-bordered"
                        placeholder="Recipe Details"></textarea>

                </div>

                {/* choose a file */}
                <div className="form-control w-full my-6">
                    <input
                        {...register('image', { required: true })}
                        type="file"
                        className="file-input w-full max-w-xs" />

                </div>

                <button className="btn">
                    Add Item <FaUtensils className="ml-4"></FaUtensils>
                </button>
            </form>
        </div>
    );
};

export default AddItems;