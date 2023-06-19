import React from 'react';
import { data } from '../data';
import { useGlobalContext } from '../context/context';
import {useNavigate, Link} from "react-router-dom";
import {FaAngleDown} from "react-icons/fa"
import {FaAngleUp} from "react-icons/fa"
import Button from '../components/Button';

const Cart = () => {
    const { cart, increase, decrease, amount } = useGlobalContext();
    const navigate = useNavigate()

    if (!cart.length) {
        return <div className="w-full h-[25rem] flex-center flex-col space-y-16">
            <h1 className="text-4xl lg:text-6xl">YOUR CART IS EMPTY</h1>
            <Link to="/" className="h-14 w-56 bg-brightRed text-lightGrey flex-center text-lg">Go Back To Home</Link>
        </div>
    }

  return (
    <section className="px-3 my-12 lg:px-14 lg:my-20 w-full">
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
                        <div className="flex justify-start items-center space-x-4 w-auto sm:w-72 overflow-auto">
                            <img src={image} alt="item-image" className="w-9" />
                            <div className="">
                                <p className="whitespace-normal w-56">{title.slice(0, 20)}...</p>
                            </div>
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

        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:items-start lg:justify-between mt-14 w-full">
            <div className="flex-center w-full space-y-3 sm:space-y-0 flex-col sm:flex-row">
                <input type="text" placeholder="Coupon Code" className=" w-80 placeholder:px-6 h-14 border-[1px] mr-5" />
                <Button title={"Apply Coupon"} />
            </div>
            <div className="px-6 py-8 w-full lg:w-[30rem] border-2 border-black ">
                <h2 className="text-xl font-semibold mb-5">Cart Total</h2>
                <div className="flex-center flex-col space-y-4 mb-5">
                    <div className="w-full flex item-center justify-between border-b-[1px] py-3">
                        <p className="font-medium">Subtotal:</p>
                        <p>${amount.toFixed(2)}</p>
                    </div>
                    <div className="w-full flex justify-between border-b-[1px] py-3">
                        <p className="font-medium">Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className="w-full flex item-center justify-between py-3">
                        <p className="font-medium">Total:</p>
                        <p>${amount.toFixed(2)}</p>
                    </div>
                </div>
                <Button title={"Proceed to checkout"} />
            </div>
        </div>
    </section>
  )
}

export default Cart