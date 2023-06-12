import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
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

  return (
    <div className=" px-3 my-12 lg:px-12 lg:my-20 w-full">
        <SectionHeader handleScroll={handleScroll}/>
        <Products slideRef={slideRef} />
        <Button />
    </div>
  )
}

export default Todays