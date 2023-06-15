import React from 'react';
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import Tag from './Tag';

const TodayHeader = ({handleScroll}) => {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-9 ">
        <Tag title={"Today's"} />
        <div className="flex">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-20 lg:space-x-0 sm:flex-row basis-[60%] justify-between">
                <h1 className="section-heading">Flash Sales</h1>
                <div className="flex space-x-1 lg:space-x-8 items-center justify-center">
                    <div className="time">
                        <span className="time-tag">Days</span>
                        <h2 className="time-text">03</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Hours</span>
                        <h2 className="time-text">23</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Minutes</span>
                        <h2 className="time-text">19</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="time-tag">Seconds</span>
                        <h2 className="time-text">56</h2>
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