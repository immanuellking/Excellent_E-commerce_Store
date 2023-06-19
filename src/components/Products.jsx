import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../context/context';

const Products = ({slideRef, max, wrap}) => {
  const {store} = useGlobalContext();
 

  const proLength = max ? max : store.length
  return (
    <div className={`w-full flex mt-10 gap-8 ${wrap ? "flex-wrap flex-center" : "overflow-x-hidden scroll-smooth"}`} ref={slideRef}>
      {store.slice(0, proLength).map((item, index) => (
        <div key={index}>
          <Product {...item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
