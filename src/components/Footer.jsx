import React from 'react';
import {AiOutlineSend} from "react-icons/ai"
import { footerLinks } from '../data';
import download from "../assets/download.png";
import { ImFacebook } from "react-icons/im";
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
        <div className="px-3 py-12 lg:px-12 text-lightGrey flex flex-wrap lg:justify-between sm:gap-x-20 lg:gap-x-0 gap-y-8 sm:gap-y-0">
            <div className="flex flex-col w-full sm:w-auto items-center justify-center sm:items-start sm:justify-start space-y-4 my-4">
                <h4 className="text-3xl sm:text-2xl font-bold">Exclusive</h4>
                <p className="cursor-pointer">Suscribe</p>
                <p className="cursor-pointer">Get 10% off your first order</p>
                <div className="w-60 flex border-[1px] border-lightGrey rounded-sm">
                    <input type="text" placeholder="Enter your email" className="bg-transparent outline-none border-none placeholder:text-xs placeholder:text-center p-1" />
                    <div className="mr-6 flex-center">
                    <AiOutlineSend className="text-2xl" />
                    </div>
                </div>
            </div>
            {footerLinks.map((item, index) => {
                const {header, items} = item;
                return <div key={index} className=" w-full sm:w-52 flex flex-col items-center justify-center sm:items-start sm:justify-start space-y-4 my-4">
                    <h4 className="text-2xl sm:text-xl font-medium">{header}</h4>
                    {items.map((link, index) => {
                        return <p key={index} className="cursor-pointer">{link}</p>
                    })}
                </div>
            })}
            <div className="flex flex-col w-full sm:w-auto items-center justify-center sm:items-start sm:justify-start space-y-4 my-4">
                <h4 className="text-2xl sm:text-xl font-medium">Download App</h4>
                <p className="text-xs cursor-pointer">Save $3 with App New User Only</p>
                <div>
                    <img src={download} alt="download" />
                </div>
                <div className="flex space-x-4">
                    <ImFacebook />
                    <FiTwitter />
                    <BsInstagram />
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
        <div className="text-white text-xs w-full text-center border-t-[0.5px] border-midGrey py-4">
            &copy; Copyright Rimel 2022. All right reserved
        </div>
    </footer>
  )
}

export default Footer