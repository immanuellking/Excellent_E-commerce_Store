import React from 'react';
import females from "../assets/females.png";
import shop from "../assets/shop.png";
import bag from "../assets/bag.png";
import dollar from "../assets/dollar.png";
import money from "../assets/money.png";

const stats = [
    {
        id: 1,
        image: shop,
        title: "10.5k",
        text: "Sallers active our site",
    },
    {
        id: 2,
        image: dollar,
        title: "33k",
        text: "Mopnthly Produduct Sale",
    },
    {
        id: 1,
        image: bag,
        title: "44.5k",
        text: "Customer active in our site",
    },
    {
        id: 1,
        image: money,
        title: "25.5k",
        text: "Anual gross sale in our site",
    },
]

const About = () => {
  return (
    <div className="my-12 lg:my-20 w-full">
        <div className="w-full text-sm text-black mb-16 cursor-pointer px-3 lg:px-12">
            <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>Home</span> / About
        </div>

        <div className="flex items-center justify-center gap-x-14 pl-3 lg:pl-12">
            <div className="space-y-10">
                <h1 className="text-5xl font-semibold">Our Story</h1>
                <div className="leading-7 space-y-5">
                    <p>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. 
                        Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands 
                        and serves 3 millioons customers across the region. 
                    </p>
                    <p>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories 
                    ranging  from consumer.
                    </p>
                </div>
            </div>
            <img src={females} alt="females" className="" />
        </div>

        <div className="flex-center mt-40 gap-x-8 px-3 lg:px-12">
            {stats.map((item, index) => {
                const {id, image, title, text} = item;
                return (
                    <div className="w-[17rem] h-[14.5rem] border-[1px] border-[rgba(0, 0, 0, 0.3)] flex-center flex-col gap-y-6">
                        <img src={image} alt="stat" />
                        <div className="space-y-3 text-center">
                            <h4 className="text-3xl font-bold">{title}</h4>
                            <p>{text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default About