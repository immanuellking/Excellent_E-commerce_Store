import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../context/context';

const Products = ({slideRef, max, wrap}) => {
  const {store} = useGlobalContext();
 

  const proLength = max ? max : store.length
  return (
    <div className={`w-full flex mt-10 space-x-4 lg:space-x-8 ${wrap ? "flex-wrap flex-center" : "overflow-x-hidden scroll-smooth"}`} ref={slideRef}>
      {store.slice(0, proLength).map((item, index) => (
        <div key={index}>
          <Product {...item} />
        </div>
      ))}
    </div>
  );
};

// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// :

export default Products;
