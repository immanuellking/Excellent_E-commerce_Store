import React from "react";
import { Link } from "react-router-dom";

const DiscountHeader = () => {
  return (
    <div className="w-full flex p-4 md:justify-between md:items-center bg-black">
        <div className="flex flex-col basis-[70%] md:flex-row md:justify-end text-xs md:text-sm text-[#FAFAFA]">
        <p className="font-normal inline-block">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to={"/products"} className='font-semibold underline ml-2'>
            ShopNow
          </Link>
        </p>
        {/* <a href="#" className='hidden md:flex font-semibold underline ml-2'>ShopNow</a> */}
        </div>
        <div className="flex items-center justify-center basis-[30%] md:justify-center bg-blue">
            <select id="language" name='language' className="bg-transparent text-sm text-[#FAFAFA] border-0 outline-0">
                <option value="English" className="text-black text-sm">English</option>
                <option value="French" className="text-black text-sm">French</option>
                <option value="Spanish" className="text-black text-sm">Spanish</option>
            </select>
        </div>
    </div>
  )
}

export default DiscountHeader;