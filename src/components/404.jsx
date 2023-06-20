import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-full h-[30rem] flex-center flex-col px-8 -mt-11">
        <div className="w-full text-sm text-black mb-20 cursor-pointer">
            <span className="text-gray-500" onClick={() => navigate("/")}>Home</span> / 404 Page
        </div>
        <div className="w-full flex-center flex-col gap-y-10">
            <h1 className="text-4xl lg:text-6xl">404 NOT FOUND</h1>
            <p className="text-center">Your visited page not found. You may go home page</p>
            <Link to="/" className="h-14 w-56 bg-brightRed text-lightGrey flex-center text-lg">Go Back To Home</Link>
        </div>
    </div>
  )
}

export default NotFound