import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/Products';

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
     <div className="w-full text-sm text-black mb-20 cursor-pointer">
        <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>Home</span> / Products
      </div>
      <Products wrap={true} />
    </div>
  )
}

export default AllProducts