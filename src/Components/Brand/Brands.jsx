/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const Brands = ({ brand, theme }) => {
    const { id, name, img, banner1, banner2, banner3, title } = brand;
    return (
        <div>
            <div>
                <Link to={`/products/${name}`}>
                    <div className={`card w-[300px] sm:w-[320px]   shadow-xl ${theme ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-800 hover:bg-gray-700'}`}>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl">{name.replace(/\b\w/g, match => match.toUpperCase())}</h2>

                        </div>
                        <figure><img src={img} /></figure>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;