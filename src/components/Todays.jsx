import React from 'react'
import TodayHeader from './TodayHeader'
import Products from './Products';
import Button from './Button';
import useHandleScroll from '../context/useHandleScroll';

const Todays = () => {
    const {slideRef, handleScroll} = useHandleScroll()

    const targetDate = new Date('2023-10-15T23:59:59');

  return (
    <div className=" px-3 my-12 lg:px-12 lg:my-20 w-full">
        <TodayHeader handleScroll={handleScroll} targetDate={targetDate}/>
        <Products slideRef={slideRef} />
        <Button title={"View All Products"} loc="/products" />
    </div>
  )
}

export default Todays