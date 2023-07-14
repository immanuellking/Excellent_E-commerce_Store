import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const CheckOut = () => {
  return (
    <div className="w-full h-[25rem] flex-center flex-col space-y-16">
      <ScrollToTop />
        <h1 className="text-4xl lg:text-6xl">LET THE POOR BREATHE😜😜</h1>
        <Link to="/" className="h-14 w-56 bg-brightRed text-lightGrey flex-center text-lg">Go Back To Home</Link>
    </div>
  )
}

export default CheckOut