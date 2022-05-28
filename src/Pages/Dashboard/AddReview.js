import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey='0be1a7996af760f4a03a7add137ca496';

    const onSubmit=async data=>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const review = {
                    name: data.name,
                    description: data.description,
                    location: data.location,
                    img: img
                }

                fetch('https://radiant-stream-55289.herokuapp.com/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Review added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the review');
                    }
                })
            }
        })

    }

    return (
        <div>
            <h2 className="text-2xl">Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Description"
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                    ></textarea>
                    
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'location is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        {errors.location?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                    </label>
                </div>

                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddReview;