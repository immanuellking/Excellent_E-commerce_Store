import React from 'react';
import Product from './Product';
import { data } from '../data';

const Products = ({slideRef, max, wrap}) => {
  const proLength = max ? max : data.length
  return (
    <div className={`w-full flex mt-10 space-x-4 lg:space-x-6 ${wrap ? "flex-wrap flex-center" : "overflow-x-hidden scroll-smooth"}`} ref={slideRef}>
      {data.slice(0, proLength).map((item, index) => (
        <div key={index}>
          <Product {...item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
