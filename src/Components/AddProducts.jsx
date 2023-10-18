// import React from 'react';

const AddProducts = () => {
    return (
        <div className="pt-32">
            <div className="flex flex-col  gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                    <div className="form-control">

                        <label className="input-group input-group-vertical ">
                            <span className="text-lg font-bold bg-blue-300">Name</span>
                            <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered font-semibold" />
                        </label>
                    </div>
                    <div className="form-control">

                        <label className="input-group input-group-vertical">
                            <span className="text-lg font-bold bg-blue-300">Brand Name</span>
                            <input type="text" name="brandname" placeholder="Enter Brand Name" className="input input-bordered font-semibold" />
                        </label>
                    </div>
                </div>
                <div className="px-4 md:w-[70%] mx-auto">
                    <div className="form-control">

                        <label className="input-group input-group-vertical">
                            <span className="text-lg font-bold bg-blue-300">Name</span>
                            <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered font-semibold" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;