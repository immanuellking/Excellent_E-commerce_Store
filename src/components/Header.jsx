import React, { useState } from "react";
import logo from "../assets/Exclusive.png";
import {FiSearch} from "react-icons/fi";
import {BsHeart, BsPencilSquare} from "react-icons/bs"
import {AiOutlineShoppingCart, AiOutlineHome, AiOutlineQuestionCircle, AiOutlineClose} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {RiMenu3Line} from "react-icons/ri";
import {SlCallIn} from "react-icons/sl";
import { useGlobalContext } from "../context/context";
import {useNavigate} from "react-router-dom"

const Header = () => {
    const [show, setShow] = useState(false);
    const { cart } = useGlobalContext();
    const navigate = useNavigate();

    const toCart = () => {
        navigate("/cart")
    } 
    
    let totalItems;

    if(cart.length > 1) {
        totalItems = cart.reduce((acc, curr) =>{
            const {quantity} = curr;
            return acc += quantity
        }, 0)
    }

  return (
    <div className="w-full flex py-4 px-3 items-center sm:py-8 sm:p-12 sm:items-end border-b-[1px] border-gray-300">
        <div className="flex flex-1 justify-between">
            <div className="w-24 h-4 sm:w-32 sm:h-6">
                <img src={logo} alt="exclusive" className="w-full h-full" />
            </div>
            <ul className="space-x-10 hidden lg:flex">
                    <li className="header-links"><a href="#">Home</a></li>
                    <li className="header-links"><a href="#">Contact</a></li>
                    <li className="header-links"><a href="#">About</a></li>
                    <li className="header-links"><a href="#">Signup</a></li>
            </ul>
        </div>
        <div className="flex flex-1 justify-end space-x-0 sm:space-x-7">
            <div className="flex sm:bg-midGrey sm:w-60 sm:h-9 ">
                <input type="search" placeholder="What are you looking for?" className="border-0 outline-0 bg-transparent w-full h-full text-xs pl-5 hidden sm:block" />
                <FiSearch className="flex items-center justify-center p-2 w-11 h-full cursor-pointer"/>
            </div>
            <div className="flex items-center space-x-3 lg:space-x-6">
                <BsHeart className="w-5 h-5 cursor-pointer hover:text-brightRed" />
                <div className="relative" onClick={toCart}>
                    <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer hover:text-brightRed"/>
                    <div className="absolute flex-center w-6 h-6 text-xs font-medium rounded-full bg-brightRed text-lightGrey -top-4 -left-2 ">
                        {totalItems}
                    </div>
                </div>
                <div className="hidden sm:flex bg-[#DB4444] w-8 h-8 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-[#DB4444] text-white hover:text-brightRed cursor-pointer">
                    <BsPerson className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center lg:hidden">
                    {!show ? <RiMenu3Line className="text-3xl" onClick={() => setShow(!show)} /> : <AiOutlineClose className="text-3xl" onClick={() => setShow(!show)} />} 
                    {show && (
                        <div className="absolute top-40 right-2 flex bg-white p-6 ">
                            <ul className="space-y-5">
                                <li className="mobile-header-links"><AiOutlineHome className="text-lg" /><a href="#">Home</a></li>
                                <li className="mobile-header-links"><SlCallIn className="text-lg" /> <a href="#">Contact</a></li>
                                <li className="mobile-header-links"><AiOutlineQuestionCircle className="text-lg" /> <a href="#">About</a></li>
                                <li className="mobile-header-links"><BsPencilSquare className="text-lg" /> <a href="#">Sign Up</a></li>
                                <li className="mobile-header-links"><BsPerson className="text-lg" /> <a href="#">Manage My Account</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header