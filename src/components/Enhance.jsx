import React from 'react';
import speaker from "../assets/speaker.png"

const Enhance = () => {
  return (
    <section className="px-3 my-12 lg:px-12 lg:my-20">
        <div className=" px-5 lg:px-10 py-14 flex space-y-16 lg:space-y-0 flex-col lg:flex-row bg-black">
            <div className="basis-2/4">
                <p className="text-lightGreen text-base sm:text-xl">Categories</p>
                <h1 className="text-3xl sm:text-6xl lg:text-5xl font-semibold text-lightGrey my-7 leading-[40px] sm:leading-[70px] lg:leading-[60px]">
                    Enhance Your <br className="hidden lg:block" /> Music Experience
                </h1>
                <div className="flex space-x-3 sm:space-x-8 lg:space-x-6">
                    <div className="enhance-timer">
                        <p>23</p>
                        <span>Hours</span>
                    </div>
                    <div className="enhance-timer">
                        <p>05</p>
                        <span>Days</span>
                    </div>
                    <div className="enhance-timer">
                        <p>59</p>
                        <span>Minutes</span>
                    </div>
                    <div className="enhance-timer">
                        <p>35</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <button className="py-3 px-8 mt-8 border-2 bg-lightGreen border-lightGreen rounded-md font-medium text-lightGrey hover:text-lightGreen hover:bg-lightGrey hover:border-2 hover:border-lightGreen transition-all duration-500">Buy Now!</button>
            </div>
            <div className="basis-2/4 flex-center">
                <img src={speaker} alt="speaker image" className=" w-[90%] lg:w-full lg:h-full" />
            </div>
        </div>
    </section>
  )
}

export default Enhance