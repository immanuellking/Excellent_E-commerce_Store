import React from 'react';
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";
import Tag from './Tag';

const SectionHeader = () => {
  return (
    <div className="flex flex-col space-y-9">
        <Tag title={"Today's"} />
        <div className="flex">
            <div className="flex space-x-20 lg:space-x-0 flex-row basis-[60%] justify-between">
                <h1 className="text-2xl lg:text-4xl font-semibold">Flash Sales</h1>
                <div className="flex space-x-1 lg:space-x-8 items-center justify-center">
                    <div className="time">
                        <span className="text-sm font-medium">Days</span>
                        <h2 className="time-text">03</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="text-sm font-medium">Hours</span>
                        <h2 className="time-text">23</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="text-sm font-medium">Minutes</span>
                        <h2 className="time-text">19</h2>
                    </div> <span className="time-text text-brightRed">:</span>
                    <div className="time">
                        <span className="text-sm font-medium">Seconds</span>
                        <h2 className="time-text">56</h2>
                    </div>
                </div>
            </div>
            <div className="basis-[40%] hidden lg:flex items-center justify-end space-x-5">
                <div className="arrow">
                    <BsArrowLeft className="text-xl font-semibold" />
                </div>
                <div className="arrow">
                    <BsArrowRight className="text-xl font-semibold" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionHeader