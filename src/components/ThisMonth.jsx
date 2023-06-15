import React from 'react';
import ThisMonthHeader from './ThisMonthHeader';
import Products from './Products';

const ThisMonth = () => {
  return (
    <div className="flex-center flex-col px-3 my-12 lg:px-12 lg:my-20 w-full">
        <ThisMonthHeader />
        <Products wrap={true} max={5}/>
    </div>
  )
}

export default ThisMonth