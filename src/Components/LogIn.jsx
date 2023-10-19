// import React from 'react';

import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="bg-base-200 pt-24">
            <h2 className="text-4xl font-bold text-center">Please Log In</h2>
            <div className="hero min-h-screen">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 sm:w-[500px] w-[300px]">
                        <form className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Do not have an account? <Link className="font-bold hover:text-blue-500" to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;