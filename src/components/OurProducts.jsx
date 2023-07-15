import React, {useRef} from 'react'
import SectionHeader from './SectionHeader'
import Products from './Products'
import Button from './Button'
import useHandleScroll from '../context/useHandleScroll'

const OurProducts = () => {
  const {slideRef, handleScroll} = useHandleScroll()
  
  return (
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
        <SectionHeader handleScroll={handleScroll} title={"Explore Our Products"} tag={"Our Products"} direction={true} />
        <Products max={10} slideRef={slideRef}/>
        <Button title={"View All Products"} loc="/products" />
    </div>
  )
}

export default OurProducts