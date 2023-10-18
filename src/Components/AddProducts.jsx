// import React from 'react';

import { useState } from "react";

const AddProducts = () => {
    const [category, setcategory] = useState('');
    const [rating, setrating] = useState('');
    const [categoryerror, setcategoryerror] = useState('');
    const [ratingerror, setratingerror] = useState('');
    const handleCategory = e => {
        setcategoryerror('')
        setcategory(e.target.value);
        console.log(e.target.value);
    };
    const handleRating = e => {


        setratingerror('')
        setrating(e.target.value);
        console.log(e.target.value);
    };

    const handleAddingData = e => {
        e.preventDefault();
        setcategoryerror('')
        setratingerror('')
        if (category === '') {
            return setcategoryerror('Please Select Category!!')
        }
        if (rating === '') {
            return setratingerror('Please Select Rating!!')
        }
        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const details = form.details.value
        const addedproduct = { name, brandname, photo, price: parseFloat(price), category, rating: parseInt(rating), details }
        console.log(addedproduct);
        // fetch('http://localhost:3000/xiaomi', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(addedproduct)
        // })
        // .then(res=>res.json())
        // .then(data=> {
        //     console.log(data);
        // })
    }
    return (
        <div className="pt-32 max-w-7xl mx-auto">
            <form onSubmit={handleAddingData}>
                <div className="flex flex-col  gap-8 lg:w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 px-4">
                        <div className="form-control">

                            <label className="input-group input-group-vertical ">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Name</span>
                                <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered font-semibold bg-purple-100" required />
                            </label>
                        </div>
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Brand Name</span>
                                <input type="text" name="brandname" placeholder="Enter Brand Name" className="input input-bordered font-semibold bg-purple-100" required />
                            </label>
                        </div>
                    </div>
                    <div className="px-4 w-full md:w-[70%] mx-auto">
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Photo</span>
                                <input type="text" name="photo" placeholder="Enter Photo Url" className="input input-bordered font-semibold bg-purple-100" required />
                            </label>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4">
                        <div className="form-control col-span-2 md:col-span-1">

                            <label className="input-group input-group-vertical ">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Category</span>
                                <div></div>
                            </label>
                            <div className="form-control w-full">
                                <div className="w-full flex">
                                    <select className=" border border-[#e6e3e3f1]  w-full rounded-b-lg p-3 bg-purple-100" value={category} onChange={handleCategory}>
                                        <option value="" disabled>Select category</option>
                                        <option>Phone</option>
                                        <option>Smart Watch</option>
                                        <option>PC</option>
                                        <option>Laptop</option>
                                        <option>HeadPhone</option>
                                        <option>Tablet</option>
                                        <option>Camera</option>
                                        <option>Mouse</option>
                                        <option>KeyBoard</option>
                                        <option>Air Birds</option>
                                        <option>Smart Tv</option>
                                        <option>Speaker</option>
                                        <option>Proccessor</option>
                                        <option>Fan</option>
                                        <option>Router</option>
                                        <option>Printer</option>
                                    </select>

                                </div>
                            </div>
                            <p className="text-sm font-medium text-red-500">{categoryerror}</p>
                        </div>
                        <div className="form-control">

                            <label className="input-group input-group-vertical w-full">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Price</span>
                                <div>
                                    <div className="">

                                        <label className=" flex bg-[#6e1fc2]">
                                            <label></label>
                                            <input type="number" placeholder="Enter Price" name="price" className="border  w-full border-[#e6e3e3f1] p-3 rounded-bl-lg bg-purple-100" required />

                                            <p className=" bg-[#6e1fc2] text-white p-3">BDT</p>

                                        </label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="form-control">

                            <label className="input-group input-group-vertical ">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Rating</span>
                                <div></div>
                            </label>
                            <div className="form-control w-full">
                                <div className="w-full flex">
                                    <select className=" border border-[#e6e3e3f1]  w-full rounded-b-lg p-3 bg-purple-100" value={rating} onChange={handleRating}>
                                        <option value="" disabled>Select Rating</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>

                                </div>
                            </div>
                            <p className="text-sm font-medium text-red-500">{ratingerror}</p>
                        </div>
                    </div>
                    <div className="px-4 w-full md:w-[70%] mx-auto">
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span className="text-lg font-bold bg-[#9949ef] text-white">Details</span>
                                <textarea type="text" name="details" placeholder="Enter Details" className="input input-bordered font-semibold bg-purple-100 h-[150px]" required ></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="text-center py-5">
                        <input type="submit" className="btn bg-[#9949ef] hover:bg-[#4d1787] text-white font-bold text-sm " value="Add Product" />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddProducts;