import React, { useRef } from 'react'
import TodayHeader from './TodayHeader'
import Products from './Products';
import Button from './Button';

const Todays = () => {
    const slideRef = useRef();

    const handleScroll = (direction) => {
        if(direction === "right" ) {
            slideRef.current.scrollLeft += 300
        }
        if(direction === "left" ) {
            slideRef.current.scrollLeft -= 300
        }
    }

    const targetDate = new Date('2023-07-15T23:59:59');

  return (
    <div className=" px-3 my-12 lg:px-12 lg:my-20 w-full">
        <TodayHeader handleScroll={handleScroll} targetDate={targetDate}/>
        <Products slideRef={slideRef} />
        <Button title={"View All Products"}/>
    </div>
  )
}

export default Todays