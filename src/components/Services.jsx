import React from 'react';
import { servicesData } from '../data';

const Services = () => {
  return (
    <section className="px-3 my-12 lg:px-12 lg:my-20 w-full" >
        <div className=" w-full flex flex-col lg:flex-row justify-around ">
            {servicesData.map((service) => {
                const {id, icon, header, text} = service;
                return <div key={id} className="flex-center flex-col p-8" >
                    <img src={icon} alt="service" className="w-20" />
                    <div className="text-center mt-6">
                        <h4 className="font-semibold text-xl">{header}</h4>
                        <p className="pt-2">{text}</p>
                    </div>
                </div>
            })}
        </div>
    </section>
  )
}

export default Services