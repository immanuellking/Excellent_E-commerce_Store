import React from 'react';
import Product from './Product';
import { data } from '../data';

const Products = ({slideRef, max}) => {
  const proLength = max ? max : data.length
  return (
    <div className="flex mt-10 space-x-5 lg:space-x-8 overflow-x-hidden scroll-smooth" ref={slideRef}>
      {data.slice(0, proLength).map((item, index) => (
        <div key={index} className="mr-1 lg:mr-6">
          <Product {...item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
