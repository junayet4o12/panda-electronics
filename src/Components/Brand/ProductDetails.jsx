// import React from 'react';

import Rating from "react-rating";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
// import { FaRegFaceSadTear } from 'react-icons/fa6';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase.jsx/AuthProviders";
const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [seemore, setseemore] = useState(true);
    console.log(product);
    const { name, brandname, photo, price, category, rating, details } = product;
    const addindproduct = { client: user?.email, name, brandname, photo, price, category, rating, details }

    const handleseemore = () => {
        setseemore(!seemore);
    }


    const handleaddtocart = () => {
        fetch(`http://localhost:3000/client`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addindproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({

                        icon: 'success',
                        title: 'Your cart has been added.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    if (brandname) {
        return (
            <div>
                <div className={`${!brandname && 'hidden'}`}>
                    <div className="pt-20 max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center py-7">{product.name} Details</h2>
                        <div className="flex flex-col justify-center items-center px-5">
                            <div className=" h-[350px] sm:h-[400px] w-full  sm:w-[600px] bg-no-repeat bg-cover bg-center rounded-xl rounded-b-md  relative " style={{ backgroundImage: `Url(${product?.photo})` }}>
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
                            <div className="p-2 flex flex-col justify-between pb-7 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto">
                                <div className="">
                                    <p className="text-3xl font-bold text-blue-600"> Brand: {product?.brandname}</p>
                                    <p className=" font-bold text-xl">Price: {product?.price} BDT</p>
                                    <p className="text-base font-bold text-justify">{(product?.details?.length > 200) ? (seemore ? ((product?.details)?.slice(0, 200) + '....') : product?.details) : product?.details} <br /> <span className={`${(product?.details?.length <= 200) && 'hidden'}`}><span className="text-blue-500 text-lg cursor-pointer" onClick={handleseemore}>{seemore ? 'See more' : 'See less'}</span></span></p>
                                </div>
                                <div className=" gap-4 text-end px-4 mt-6">




                                    <button onClick={handleaddtocart} className="btn btn-primary">Add to Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
    if (!brandname) {
        return <Navigate  to='/why/you/do/chalaki'></Navigate>
    }
};

export default ProductDetails;