import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiHeart } from "react-icons/fi";
import delivery from "../assets/icon-delivery.png";
import returnIcon from "../assets/icon-return.png";

const url = "https://fakestoreapi.com/products/";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getSingleProduct = async () => {
        try {
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            setProduct(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [id])

    const {description, image, title, rating, price} = product;
    const {count} = rating || {}
  return (
    <section className="px-3 lg:px-12 my-12 w-full">
        <div className="w-full text-sm text-black mb-20 cursor-pointer">
            <span className="text-gray-500" onClick={() => navigate("/")}>Home</span> / Product / {title}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-y-0">
            <div className="basis-2/4 flex-center">
                <img src={image} alt={title} className="w-2/4 lg:w-4/5" />
            </div>
            <div className="flex items-center justify-center lg:items-start flex-col basis-2/4">
                <div className="space-y-4 pb-8 w-full flex items-center justify-center lg:items-start flex-col border-b-[1px]">
                    <h1 className="font-semibold text-2xl">{title}</h1>
                    <div className="flex gap-x-2">
                        <div className="flex gap-x-1">
                            <BsStarFill className="text-[#FFAD33] text-lg"/>
                            <BsStarFill className="text-[#FFAD33] text-lg" />
                            <BsStarFill className="text-[#FFAD33] text-lg" />
                            <BsStarFill className="text-[#FFAD33] text-lg" />
                            <BsStarHalf className="text-[#FFAD33] text-lg" />
                        </div>
                        <p className="text-sm">{count ? `(${count} reviews)` : "(0 reviews)"} | <span className="text-[#00FF66]">In Stock</span></p>
                    </div>
                    <h3 className="text-2xl">${price}</h3>
                    <p className="text-sm px-3 lg:px-0">{description}</p>
                </div>
                <div className="pt-8 space-y-6 sm:space-y-8">
                    <div className="flex justify-center lg:justify-start gap-x-4">
                        <div className="flex-center w-40 h-11 border-black border-[1px] rounded-sm text-lg">
                            <div className="h-full w-full basis-1/4 flex-center hover:bg-brightRed hover:text-lightGrey">-</div>
                            <div className="h-full w-full basis-1/2 flex-center border-x-[1px] border-black font-semibold">2</div>
                            <div className="h-full w-full basis-1/4 flex-center hover:bg-brightRed hover:text-lightGrey">+</div>
                        </div>
                        <button className="flex-center w-40 h-11 bg-brightRed text-lightGrey font-medium rounded-sm">Buy Now</button>
                        <div className="w-11 h-11 flex-center border-[1px] border-black rounded-sm">
                            <FiHeart className="text-black text-xl" />
                        </div>
                    </div>
                    <div className="border-2 border-black w-full sm:w-[500px]">
                        <div className="flex px-4 py-6 items-center justify-between border-b-2 border-black">
                            <img src={delivery} alt="delivery" />
                            <div className="basis-4/5 flex flex-col items-start">
                                <h3 className="font-medium">Free Delivery</h3>
                                <p className="underline">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex px-4 py-6 items-center justify-between">
                            <img src={returnIcon} alt="return" />
                            <div className="basis-4/5 flex flex-col items-start">
                                <h3 className="font-medium">Return Delivery</h3>
                                <p>Free 30 Days Delivery Returns. <a href="#" className="underline">Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductPage
// category
// : 
// "men's clothing"
// description
// : 
// "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
// id
// : 
// 3
// image
// : 
// "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
// price
// : 
// 55.99
// rating
// : 
// {rate: 4.7, count: 500}
// title
// : 
// "Mens Cotton Jacket"

