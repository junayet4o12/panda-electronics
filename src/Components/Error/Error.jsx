// import React from 'react';
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { TbError404Off } from 'react-icons/tb';

const Error = () => {
    const error = useRouteError();
    console.error(error);
    const nevigate = useNavigate();
    const handleback = () => {
        nevigate(-1);
    }
    const btndesign = {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div id="error-page" className="flex flex-col justify-center items-center gap-2  h-[450px]">

            <p className="text-[150px] text-red text-center "><TbError404Off color="#ea3e3e"></TbError404Off></p>


            <h1 className="text-center text-4xl font-bold">Oops!</h1>
            <p className="text-center text-xl font-medium">Sorry, an unexpected error has occurred.</p>
            <p className="text-center">
                <i className="text-center text-xl font-normal">{error.statusText || error.message}</i>
            </p>
            <div className="text-center flex gap-3">
                <button onClick={handleback} className="btn  bg-red-500 hover:bg-red-600 font-bold text-white">Go back</button>
                <Link to="/"><button style={btndesign} className="btn bg-red-500">go home</button></Link>
            </div>
        </div>
    );
}

export default Error;