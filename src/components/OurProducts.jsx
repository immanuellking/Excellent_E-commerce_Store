import React, {useRef} from 'react'
import SectionHeader from './SectionHeader'
import Products from './Products'
import Button from './Button'

const OurProducts = () => {
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
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
        <SectionHeader handleScroll={handleScroll} title={"Explore Our Products"} tag={"Our Products"} direction={true} />
        <Products max={10} slideRef={slideRef}/>
        <Button title={"View All Products"} loc="/products" />
    </div>
  )
}

export default OurProducts