import React, { useState, useEffect } from 'react';
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import Tag from './Tag';
import { useGlobalContext } from '../context/context';

const TodayHeader = ({handleScroll, targetDate}) => {

    const {getTimeLeft} = useGlobalContext()

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
    <div className="flex flex-col space-y-6 sm:space-y-9 ">
        <Tag title={"Today's"} />
        <div className="flex">
            <div className="w-full flex justify-center flex-col space-y-3 sm:space-y-0 sm:space-x-20 lg:space-x-0 sm:flex-row sm:basis-[60%] sm:justify-between">
                <h1 className="section-heading text-center sm:text-left">Flash Sales</h1>
                <div className="flex space-x-1 lg:space-x-8 items-start justify-center">
                    <div className="time">
                        <span className="time-tag">Days</span>
                        <h2 className="time-text">{days}</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Hours</span>
                        <h2 className="time-text">{hours}</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Minutes</span>
                        <h2 className="time-text">{minutes}</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Seconds</span>
                        <h2 className="time-text">{seconds}</h2>
                    </div>
                </div>
            </div>
            <div className="basis-[40%] lg:flex items-center justify-end space-x-5 hidden">
                <div className="arrow" onClick={() => handleScroll("left")}>
                    <BsArrowLeft className="text-xl font-semibold"/>
                </div>
                <div className="arrow" onClick={() => handleScroll("right")}>
                    <BsArrowRight className="text-xl font-semibold" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodayHeader