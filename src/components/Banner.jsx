import React from 'react';
import Apple_logo from "../assets/Apple_logo.png";
import banner from "../assets/banner.png";
import {BsArrowRight} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
  return (
    <section className="px-0 py-6  lg:px-12 lg:py-12 h-[70%] md:h-4/5 bg-black w-full">
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center text-lightGrey p-4 space-y-4 md:space-y-0">
            <div className="flex-1 flex flex-col justify-center h-full space-y-2 md:space-y-4 lg:space-y-6 p-4 lg:pl-20 lg:py-0 lg:pr-0">
                <div className="flex items-center">
                    <img src={Apple_logo} alt="apple_logo" className="w-7 h-7 lg:w-10 lg:h-12" />
                    <p className="text-sm lg:text-lg ml-4 font-normal">iPhone 14 Series</p>
                </div>
                <div>
                    <h1 className="text-4xl tracking-tighter lg:tracking-normal leading-normal lg:text-5xl font-semibold">Up to 10% <br className="hidden lg:block" /> off Voucher</h1>
                </div>
                <div className="flex items-center" onClick={() => navigate("/products")}>
                    <button className="flex items-center text-sm lg:text-lg font-medium border-b-2 pb-1 ">
                        Shop Now
                    </button> 
                    <BsArrowRight className="ml-2 text-2xl md:text-3xl text-lightGrey" /> 
                </div>
            </div>
            <div className="flex-1 lg:w-full lg:h-full pt-6">
                <img src={banner} alt="banner" className="w-full h-full"/>
            </div>
        </div>
    </section>
  )
}

export default Banner