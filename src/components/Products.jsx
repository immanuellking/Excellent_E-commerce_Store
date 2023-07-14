import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../context/context';

const Products = ({slideRef}) => {
  const {store, loading} = useGlobalContext();

  if(loading) {
    return <div className="w-full h-[25rem] flex mt-10 flex-center">
      <h1 className="text-4xl font-semibold">Loading...</h1>
    </div>
  }


  return (
    <div className={"w-full flex mt-10 gap-8 overflow-x-scroll lg:overflow-x-hidden"} ref={slideRef}>
      {store.map((item, index) => (
        <div key={index}>
          <Product {...item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
