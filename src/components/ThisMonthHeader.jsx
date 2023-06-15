import React from 'react';
import Tag from './Tag';
import Button from './Button';

const ThisMonthHeader = () => {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-9 w-full">
        <Tag title={"This Month"} />
        <div className="flex justify-between">
            <h1 className="section-heading">Best Selling <br className=" sm:hidden"/>Products</h1>
            <div className="">
                <Button title={"View All"}/>
            </div>
        </div>
    </div>
  )
}

export default ThisMonthHeader