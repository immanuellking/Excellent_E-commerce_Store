import React, { useState, useEffect } from 'react';
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import Tag from './Tag';

const TodayHeader = ({handleScroll, targetDate}) => {

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(getTimeLeft(targetDate));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, [targetDate]);

    function getTimeLeft (targetDate) {
        const totalSeconds = Math.floor((new Date() - targetDate) / 1000);
        console.log(`TotalSecond: ${totalSeconds}`);

        const days = Math.abs(Math.floor(totalSeconds / 86400));
        console.log(`Days: ${days}`);

        const hours = Math.abs(Math.floor((totalSeconds % 86400) / 3600));
        console.log(`Hours: ${hours}`);

        const minutes = Math.abs(Math.floor((totalSeconds % 3600) / 60));
        console.log(`Minutes: ${minutes}`);

        const seconds = Math.abs(Math.floor(totalSeconds % 60));
        console.log(`Seconds: ${seconds}`);

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    const {days, hours, minutes, seconds} = timeLeft;

  return (
    <div className="flex flex-col space-y-6 sm:space-y-9 ">
        <Tag title={"Today's"} />
        <div className="flex">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-20 lg:space-x-0 sm:flex-row basis-[60%] justify-between">
                <h1 className="section-heading">Flash Sales</h1>
                <div className="flex space-x-1 lg:space-x-8 items-center justify-center">
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
            <div className="basis-[40%] flex items-center justify-end space-x-5">
                <div className="arrow">
                    <BsArrowLeft className="text-xl font-semibold" onClick={() => handleScroll("left")} />
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