import React from 'react';
import Tag from './Tag';
import Button from './Button';

const ThisMonthHeader = () => {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-9 w-full">
        <Tag title={"This Month"} />
        <div className="flex flex-col space-y-4 lg:space-y-0 sm:flex-row justify-between items-center">
            <h1 className="section-heading whitespace-nowrap text-center">Best Selling Products</h1>
            <div className="">
                <Button title={"View All"} loc="/products" />
            </div>
        </div>
    </div>
  )
}

export default ThisMonthHeader