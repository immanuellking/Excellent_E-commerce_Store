import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsEye } from "react-icons/bs"

const Product = ({ id, discount, img, name, price }) => {
    return (
        <div className="w-[14rem] h-[25rem] flex flex-col space-y-3 rounded-bl-md rounded-br-md">
            <div className="relative bg-midGrey h-[15rem] flex items-center justify-center">
                <div className=" flex justify-center items-center">
                    <img src={img} alt="Product" className="w-full" />
                </div>
                <div className="absolute px-2 py-1 rounded-md bg-brightRed text-lightGrey text-sm top-3 left-3">{discount}</div>
                <div className="absolute top-3 right-3 flex flex-col space-y-3">
                    <div className="rounded-full bg-white">
                        <FiHeart className="text-black m-2 text-lg" />
                    </div>
                    <div className="rounded-full bg-white">
                        <BsEye className="text-black m-2 text-lg" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-base font-medium text-black">{name}</h3>
                <div className="flex space-x-2">
                    <p className="text-brightRed text-base font-medium">${price.currentPrice}</p>
                    <p className="line-through text-base font-medium text-black opacity-50">${price.oldPrice}</p>
                </div>
            </div>
            <button className="bg-black text-white text-base font-medium py-3 rounded-bl-md rounded-br-md">Add To Cart</button>
        </div>
    )
}

export default Product