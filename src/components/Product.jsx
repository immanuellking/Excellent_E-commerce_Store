import React,{ useState } from "react";
import { FiHeart } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs"
import { useGlobalContext } from "../context/context";

const Product = ({ id, image, price, title  }) => {
    const {addToCart, addToWishList} = useGlobalContext();
    const [liked, isLiked] = useState(false)
    const  oldPrice = price + 30;
    const wishItems = (id) => {
        isLiked(true);
        addToWishList(id)
    }
    return (
        <div className="w-[14rem] h-[25rem] flex flex-col space-y-3 rounded-bl-md rounded-br-md">
            <div className="relative bg-midGrey h-[15rem] flex items-center justify-center">
                <div className=" flex w-full h-full justify-center items-center">
                    <img src={image} alt="Product" className="w-full h-full" />
                </div>
                <div className="absolute px-2 py-1 rounded-md bg-brightRed text-lightGrey text-sm top-3 left-3">-30</div>
                <div className="absolute top-3 right-3 flex flex-col space-y-3">
                    <div className="rounded-full bg-white cursor-pointer" onClick={() => wishItems(id)}>
                        {!liked ?
                        <FiHeart className="text-black m-2 text-lg" onClick={() => isLiked(true)} /> :
                        <BsHeartFill className="text-red m-2 text-lg"/>
                        }
                    </div>
                    <div className="rounded-full bg-white cursor-pointer">
                        <BsEye className="text-black m-2 text-lg" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-base font-medium text-black">{title.slice(0, 11)}...</h3>
                <div className="flex space-x-2">
                    <p className="text-brightRed text-base font-medium">${price}</p>
                    <p className="line-through text-base font-medium text-black opacity-50">${oldPrice.toFixed(2)}</p>
                </div>
            </div>
            <button className="bg-black text-white text-base font-medium py-3 rounded-bl-md rounded-br-md hover:text-black hover:border-[1px] hover:border-black hover:bg-transparent duration-300 transition-all" onClick={() => addToCart(id)} >
                Add To Cart
            </button>
        </div>
    )
}

export default Product