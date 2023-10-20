// import React from 'react';

import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Swal from "sweetalert2";
import { AuthContext } from "./Firebase.jsx/AuthProviders";
const AddToCart = () => {
    let loading = true
    const { user } = useContext(AuthContext);
    loading = true
    const loadeddata = useLoaderData();
    loading = true
    const usercart = loadeddata?.filter(data => data?.client == user?.email);
    loading = true
    console.log(usercart);
    
    const [products, setproducts] = useState(usercart);
    loading = false
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/client/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const newproducts = products?.filter(product => product?._id !== _id)

                        setproducts(newproducts);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }

                    })
            }


        })
    }
    if(loading){
        return <p></p>;
    }
    return (
        <div>
            <div className={`${(products?.length < 1) ? 'hidden' : 'block'} py-24`}>
                <div>
                    <h2 className="text-4xl font-bold text-center pt-7">My Added Product</h2>
                    <div className="flex flex-wrap justify-center items-center gap-7 my-10 p-4">
                        {
                            products?.map(product => <div key={product?._id} className="shadow-lg shadow-black rounded-xl bg-gray-100 w-[80%] sm:w-max">

                                <div className="flex flex-col ">
                                    <div className="h-[250px] sm:h-[266px] w-full sm:w-[400px] bg-no-repeat bg-cover bg-center rounded-xl rounded-b-md  relative " style={{ backgroundImage: `Url(${product?.photo})` }}>
                                        <div className="w-full h-[60px] bg-[#00000082] rounded-b-md  absolute bottom-0 px-2  overflow-x-hidden">
                                            <h4 className="text-white  text-base sm:text-lg font-bold w-max">{product?.name}</h4>
                                            <div className="flex justify-between items-center ">
                                                <h5 className="text-white font-semibold">{product?.category}</h5>
                                                <p className="text-2xl text-yellow-400">
                                                    <Rating
                                                        initialRating={product?.rating}
                                                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                                        fullSymbol={<AiFillStar></AiFillStar>}
                                                        readonly
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 flex flex-col justify-between pb-7 text-black">
                                        <div>
                                            <p className="text-xl font-bold "> Brand: {product?.brandname}</p>
                                            <p className=" font-bold ">Price: {product?.price} BDT</p>
                                            <p className="text-sm font-semibold max-w-full sm:max-w-[380px]">{(product?.details?.length > 150) ? ((product?.details)?.slice(0, 150) + '....') : product?.details}</p>
                                        </div>
                                        <div className=" gap-4 sm:text-end px-4 mt-6">




                                            <button onClick={() => handleDelete(product._id)} className="btn btn-neutral">Delete</button>

                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div
                className={`${!(products.length < 1) ? 'hidden' : 'block'}`}
            >
                <div className="flex flex-col justify-center items-center gap-5 h-[100vh]">
                    <h2 className="text-9xl font-bold text-red-500"><FaRegFaceSadTear></FaRegFaceSadTear></h2>
                    <h2 className="text-5xl font-bold">Sorry!!!</h2>
                    <h2 className="text-2xl font-semibold">No Product Available</h2>
                </div>
            </div>
        </div>

    );
};

export default AddToCart;