// import React from 'react';

const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto py-20 ">
            <div className="p-4 sm:pl-10">
                <h2 className="text-4xl font-bold text-center">CONTACT US</h2>
                <h1 className="3xl font-medium text-center">For more details contact with send your feedback to <br />  <span className="font-bold"> Panda Electronics</span></h1>
            </div>
            <div className="text-black">
                <div className="flex flex-wrap  justify-center items-center gap-x-4 p-4 gap-y-7">
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-blue-100 border-[1px] rounded text-sm font-semibold" type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-blue-100 border-[1px] rounded text-sm font-semibold" type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-blue-100 border-[1px] rounded text-sm font-semibold" type="text" name="country" placeholder="Your Country Name" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-blue-100 border-[1px] rounded text-sm font-semibold" type="text" name="number" placeholder="Your Phone Number" />
                    </div>
                </div>
                <div className="flex justify-center items-center mb-7">
                    <textarea className=" border-[1.5px]  rounded-lg h-[200px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] p-4 text-sm font-semibold bg-blue-100" placeholder="Write your experience...."></textarea>
                </div>
                <div className="text-center">
                    <button className="btn rounded-lg bg-purple-600 hover:bg-purple-700  text-white font-bold text-sm border-none">send email</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;