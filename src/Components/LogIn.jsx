// import React from 'react';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Firebase.jsx/AuthProviders";
import { FaGoogle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const LogIn = () => {
    const [doneerror, setdoneerror] = useState('')
    const [showpass, setshowpass] = useState(true);
    const [passvalue, setpassvalue] = useState(null)
    const { loginuser, googlelogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handlepassvalue = (e) => {
        e.preventDefault()
        setpassvalue(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setdoneerror('');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        loginuser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                e.target.reset();

                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">Something else in email or password..</p>)
            })
    }

    const handlegooglelogin = () => {
        googlelogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })


                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
            })
    }
    return (
        <div className="bg-base-200 pt-24">
            <h2 className="text-4xl font-bold text-center">Please Log In</h2>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 sm:w-[500px] w-[300px]">
                        <form onSubmit={handlesubmit} className="card-body" >

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
                                <div className="w-full relative">
                                    <input onChange={handlepassvalue} type={showpass ? 'password' : 'text'} name="password" placeholder="Your password" className="input input-bordered w-full" required />
                                    <p  onClick={() => (setshowpass(!showpass))} className={`absolute top-3 right-0 mr-2 cursor-pointer text-lg  p-1 ${!passvalue && 'hidden'}`}>{showpass ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</p>
                                </div>
                                <div className="text-sm font-bold">{doneerror}</div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                <p onClick={handlegooglelogin} className="btn btn-primary mt-4 "><FaGoogle></FaGoogle>Log in with Google</p>


                            </div>
                            <div>
                                <p className="text-sm font-medium text-center">Do not have an account? <Link className="font-bold hover:text-blue-500" to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;