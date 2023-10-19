// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Swal from "sweetalert2";
const AddToCart = () => {
    const loadeddata = useLoaderData();
    const [products, setproducts] = useState(loadeddata);
    console.log(loadeddata);
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(() => {
            fetch(`http://localhost:3000/client/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const newproducts = products.filter(product => product._id !== _id)

                    setproducts(newproducts);
                    if (data.deletedCount > 0) {

                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                        )
                    }

                })

        })
    }
    return (
        <div className="py-24">
            <h2 className="text-4xl font-bold text-center pt-7">My Added Product</h2>
            <div className="flex flex-wrap justify-center items-center gap-7 my-10 p-4">
                {
                    products.map(product => <div key={product?._id} className="shadow-lg shadow-black rounded-xl bg-gray-100">

                        <div className="flex flex-col sm:flex-row">
                            <div className="h-[200px] sm:h-[233px] w-[300px] sm:w-[350px] bg-no-repeat bg-cover bg-center rounded-xl rounded-b-md sm:rounded-r-none relative " style={{ backgroundImage: `Url(${product?.photo})` }}>
                                <div className="w-full h-[60px] bg-[#00000082] rounded-b-md sm:rounded-r-none absolute bottom-0 px-2  overflow-x-hidden">
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
                            <div className="p-2 flex flex-col justify-between pb-7">
                                <div>
                                    <p className="text-xl font-bold "> Brand: {product?.brandname}</p>
                                    <p className=" font-bold ">Price: {product?.price} BDT</p>
                                    <p className="text-sm font-semibold max-w-[280px] sm:max-w-[400px]">{(product?.details?.length > 150) ? ((product?.details)?.slice(0, 150) + '....') : product?.details}</p>
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
    );
};

export default AddToCart;