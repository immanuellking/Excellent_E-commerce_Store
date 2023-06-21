import React, {useState, useEffect} from 'react';
import speaker from "../assets/speaker.png"
import { useGlobalContext } from '../context/context';

const Enhance = () => {
    const targetDate = new Date('2023-07-15T23:59:59');

    const {getTimeLeft} = useGlobalContext();

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(getTimeLeft(targetDate));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, [targetDate]);

    const {days, hours, minutes, seconds} = timeLeft;

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
                        <p>{days}</p>
                        <span>Days</span>
                    </div>
                    <div className="enhance-timer">
                        <p>{hours}</p>
                        <span>Hours</span>
                    </div>
                    <div className="enhance-timer">
                        <p>{minutes}</p>
                        <span>Minutes</span>
                    </div>
                    <div className="enhance-timer">
                        <p>{seconds}</p>
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