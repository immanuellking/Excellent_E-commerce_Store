import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiHeart } from "react-icons/fi";
import { data } from '../data';
import delivery from "../assets/icon-delivery.png";
import iconReturn from "../assets/icon-return.png"

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
        <div className="flex">
            <div className="basis-2/4">
                <img src={image} alt={title} className="" />
            </div>
            <div className="basis-2/4">
                <div>
                    <h1 className="font-semibold text-2xl">{title}</h1>
                    <div className="flex">
                        <BsStarFill className="text-[#FFAD33] text-lg"/>
                        <BsStarFill className="text-[#FFAD33] text-lg" />
                        <BsStarFill className="text-[#FFAD33] text-lg" />
                        <BsStarFill className="text-[#FFAD33] text-lg" />
                        <BsStarHalf className="text-[#FFAD33] text-lg" />
                        <p className="text-sm">{count ? `(${count} reviews)` : "(0 reviews)"} | <span>In Stock</span></p>
                    </div>
                    <h3>${price}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <div>
                        <div>
                            <div>-</div>
                            <div>2</div>
                            <div>+</div>
                        </div>
                        <button>Buy Now</button>
                        <div>
                            <FiHeart className="text-black m-2 text-lg" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={delivery} alt="delivery" />
                            <div>
                                <h3>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div>
                            <img src={iconReturn} alt="return" />
                            <div>
                                <h3>Return Delivery</h3>
                                <p>Free 30 Days Delivery Returns. <a href="">Details</a></p>
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

