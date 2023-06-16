import React from 'react';
import { data } from '../data';
import { useGlobalContext } from '../context/context';
import {useNavigate} from "react-router-dom";
import {FaAngleDown} from "react-icons/fa"
import {FaAngleUp} from "react-icons/fa"

const Cart = () => {
    const { cart, increase, decrease } = useGlobalContext();
    const navigate = useNavigate()

  return (
    <section className="px-3 my-12 lg:px-12 lg:my-20 w-full">
        <div className="text-sm text-black mb-20 cursor-pointer">
            <span className="text-gray-500" onClick={() => navigate("/")}>Home</span> / Cart
        </div>

        <div className="w-full flex-center flex-col space-y-8">
            <div className=" w-full h-20 flex justify-between items-center shadow-lg shadow-[rgba(0, 0, 0, 0.07)] px-5 rounded-md">
                <p className="w-72 flex-center">Product</p>
                <p className="w-72 flex-center">Price</p>
                <p className="w-72 flex-center">Quantity</p>
                <p className="w-72 flex-center">Subtotal</p>
            </div>
            {cart.map((item, index) => {
                const {id, image, title, price, quantity} = item;
                console.log(item)
                return (
                    <div key={index} className=" w-full h-20 flex justify-between items-center shadow-lg shadow-[rgba(0, 0, 0, 0.07)] px-5 rounded-md">
                        <div className="flex justify-start items-center space-x-4 w-72">
                            <img src={image} alt={name} className="w-10" />
                            <p>{title.slice(0, 20)}...</p>
                        </div>
                        <div className="flex-center w-72">
                            <p>${price}</p>
                        </div>
                        <div className="flex-center w-72">
                            <div className="flex-center space-x-4 border-2 px-4 py-1">
                                <p>{quantity}</p>
                                <div className="">
                                    <FaAngleUp onClick={() => increase(id)}/>
                                    <FaAngleDown onClick={() => decrease(id)}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-center w-72">
                            <p>${price * quantity}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Cart