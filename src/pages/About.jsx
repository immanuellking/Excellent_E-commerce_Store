import React from 'react';
import females from "../assets/females.png";
import shop from "../assets/shop.png";
import bag from "../assets/bag.png";
import dollar from "../assets/dollar.png";
import money from "../assets/money.png";
import { useNavigate } from 'react-router-dom';

const stats = [
    {
        id: 1,
        image: shop,
        title: "10.5k",
        text: "Sellers active our site",
    },
    {
        id: 2,
        image: dollar,
        title: "33k",
        text: "Monthly Products Sales",
    },
    {
        id: 1,
        image: bag,
        title: "44.5k",
        text: "Customers active in our site",
    },
    {
        id: 1,
        image: money,
        title: "25.5k",
        text: "Annual gross sale in our site",
    },
];

const roles = [
    {
        id: 1,
        name: "Tom Cruise",
        position: "Founder & Chairman",
    },
    {
        id: 2,
        name: "Emma Watson",
        position: "Managing Director",
    },
    {
        id: 3,
        name: "Will Smith",
        position: "Product Designer",
    },
]

const About = () => {

    const navigate = useNavigate();

  return (
    <div className="my-12 lg:my-20 w-full">
        <div className="w-full text-sm text-black mb-10 lg:mb-16 cursor-pointer px-3 lg:px-12">
            <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>Home</span> / About
        </div>

        <div className="flex items-center justify-center flex-col lg:flex-row gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-14 pl-3 pr-3 lg:pl-12 lg:pr-0">
            <div className="space-y-8 lg:space-y-10 text-center">
                <h1 className="text-5xl font-semibold">Our Story</h1>
                <div className="leading-7 space-y-5 text-left sm:text-center lg:text-left">
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

        <div className="flex-center flex-wrap mt-28 lg:mt-40 gap-8 px-3 lg:px-12">
            {stats.map((item) => {
                const {id, image, title, text} = item;
                return (
                    <div key={id } className="w-[17rem] h-[14.5rem] border-[1px] border-[rgba(0, 0, 0, 0.3)] flex-center flex-col gap-y-6">
                        <img src={image} alt="stat" />
                        <div className="space-y-3 text-center">
                            <h4 className="text-3xl font-bold">{title}</h4>
                            <p>{text}</p>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="flex-center flex-wrap mt-28 lg:mt-40 gap-8 px-3 lg:px-12">
            {roles.map((role) => {
                const { id, name, position } = role;
                return (
                    <div key={id}>
                        
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default About