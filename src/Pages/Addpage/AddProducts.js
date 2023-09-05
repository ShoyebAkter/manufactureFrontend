import React, { useEffect, useState } from 'react';
import CategoryOption from './CategoryOption';
import SubCategoryOption from './SubCategoryOption';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

function AddProducts() {
    
    // const { data: shop, isLoading, refetch } = useQuery(['order', shopId], () => fetch(`https://manufacture-backend.onrender.com/shop/${shopId}`, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // })
    //     .then(res => res.json()))
    // // console.log(index);
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const handleSubmit = () => {
        // console.log(price,productName);
    }
    // console.log(shops);
    return (
        <body class="bg-gray-100 flex bg-local" >
            <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
                <form >
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        {/* <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                                    Shop Name
                                </label>
                                <div>
                                    <select
                                        onChange={getValue}
                                        class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                        {
                                            shops.map(shop =>
                                                <option
                                                    value={shop._id}
                                                >{shop.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <CategoryOption shop={shop} setIndex={setIndex} />
                            <SubCategoryOption setSubId={setSubId} shop={shop} index={index} />
                        </div> */}
                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                    Product Name
                                </label>
                                <input
                                    // onChange={(e)=>setProductName(e.target.value)}
                                    class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus" />
                                <div>
                                    <span class="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </span>
                                </div>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                    Price
                                </label>
                                <input
                                    // onChange={(e)=>setPrice(e.target.value)}
                                    class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" name="price" placeholder="Software Engineer" />
                            </div>
                        </div>
                        {/* <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-full px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                                    Image
                                </label>
                                <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...."/>
                            </div>
                        </div> */}

                        <div class="-mx-3 md:flex mt-2">
                            <div class="md:w-full px-3">
                                <button
                                    // onClick={handleSubmit()}
                                    class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default AddProducts