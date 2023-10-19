// import React from 'react';
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./Firebase.jsx/firebase.config";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "./Firebase.jsx/AuthProviders";
import { FaGoogle } from 'react-icons/fa';
const Register = () => {
    const [doneerror, setdoneerror] = useState('')
    const { createuser, googlelogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        setdoneerror('');
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,}$/.test(password)) {
            return setdoneerror(<p className="text-red-500">Password must be at least 6 characters long and contain at least one capital letter.</p>)
        }
        createuser(email, password)
            .then(result => {
                console.log(result.user);

                updateProfile(auth.currentUser, {
                    displayName: name,

                }).then(() => {

                }).catch((error) => {
                    console.log(error);
                });
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })

                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
            })
    }
    const handlegooglelogin = () => {
        googlelogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })


                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
            })
    }
    return (
        <div className="bg-base-200 pt-24">
            <h2 className="text-4xl font-bold text-center">Please Register</h2>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 sm:w-[500px] w-[300px]">
                        <form onSubmit={handlesubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
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
                                <div className="text-sm font-bold">{doneerror}</div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <p onClick={handlegooglelogin} className="btn btn-primary mt-4"><FaGoogle></FaGoogle>Log in with Google</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-center">Already have an account? <Link className="font-bold hover:text-blue-500" to='/login'>Log in</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Register;