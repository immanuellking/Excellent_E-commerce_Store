import React from 'react'
import { data } from '../data'
import WishItem from '../components/WishItem'
import { useGlobalContext } from '../context/context'
import {Link} from "react-router-dom"
import ScrollToTop from '../components/ScrollToTop'

const WishLists = () => {
  const {wishList, moveWishListToCart} = useGlobalContext();

  if (!wishList.length) {
    return <div className="w-full h-[25rem] flex-center flex-col space-y-16">
      <ScrollToTop />
        <h1 className="text-4xl lg:text-6xl">YOUR WISH-LIST IS EMPTY</h1>
        <Link to="/" className="h-14 w-56 bg-brightRed text-lightGrey flex-center text-lg">Go Back To Home</Link>
    </div>
}


  return (
    <section className="px-3 my-12 lg:px-14 lg:my-20 w-full">
      <ScrollToTop />
        <div className="w-full flex items-center justify-between mb-10">
            <h4 className="text-xl">Wishlist({wishList.length})</h4>
            <button className="font-medium py-4 px-8 border-[1px]" onClick={moveWishListToCart} >Move All To Bag</button>
        </div>
        <div className="flex flex-wrap gap-8">
            {wishList.map((item) => (
              <div key={item.id}>
                <WishItem {...item} />
              </div>
            ))}
        </div>
    </section>
  )
}

export default WishLists