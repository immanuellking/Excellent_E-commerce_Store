import React from 'react';
import females from "../assets/females.png"

const About = () => {
  return (
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
        <div className="w-full text-sm text-black mb-20 cursor-pointer">
            <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>Home</span> / About
        </div>

        <div>
            <div>
                <h1>Our Story</h1>
                <div>
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
            <img src={females} alt="females" />
        </div>
      
    </div>
  )
}

export default About