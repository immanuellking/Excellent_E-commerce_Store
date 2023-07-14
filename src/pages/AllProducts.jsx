import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Product from '../components/Product';
import { useGlobalContext } from '../context/context';

const AllProducts = () => {
  const {store} = useGlobalContext();
  const navigate = useNavigate();
  

  return (
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
      <ScrollToTop />
     <div className="w-full text-sm text-black mb-20 cursor-pointer">
        <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>Home</span> / Products
      </div>
      <div className={"w-full flex mt-10 gap-8 flex-wrap flex-center"}>
      {store.map((item, index) => (
        <div key={index}>
          <Product {...item} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllProducts