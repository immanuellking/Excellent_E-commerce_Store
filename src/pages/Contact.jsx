import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="my-12 px-3 lg:px-12 lg:my-20 w-full">
        <div className="w-full text-sm text-black mb-10 lg:mb-16 cursor-pointer">
            <span className="text-gray-500 hover:text-black" onClick={() => navigate("/")}>
                Home
            </span> / About
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-x-6 ">
            <div className="space-y-10 sm:basis-[30%] shadow-lg rounded-sm p-8">
                <div className="space-y-6">
                    <div className="flex items-center justify-start gap-x-5">
                        <div className="w-10 h-10 text-white bg-brightRed rounded-full flex-center"><BsTelephone/></div>
                        <h5 className="font-medium text-lg">Call To Us</h5>
                    </div>
                    <div className="space-y-4 text-sm">
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-start gap-x-5">
                        <div className="w-10 h-10 text-white bg-brightRed rounded-full flex-center"><AiOutlineMail /></div>
                        <h5 className="font-medium text-lg">Write To Us</h5>
                    </div>
                    <div className="text-sm space-y-3">
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
            <div className="sm:basis-[70%] shadow-lg rounded-sm px-4 py-8 sm:px-8 sm:py-10">
                <form action="" className="space-y-6">
                    <div className="flex items-center justify-start gap-4 lg:gap-0 flex-wrap lg:justify-between">
                        <label htmlFor="name" className="w-full sm:w-auto">
                            <input type="text" id="name" placeholder="Your Name" className="w-full sm:w-60 h-12 outline-none bg-midGrey placeholder:text-black placeholder:opacity-50 pl-4 rounded-sm" />
                        </label>
                        <label htmlFor="email" className="w-full sm:w-auto">
                            <input type="text" id="email" placeholder="Your Email"  className="w-full sm:w-60 h-12 outline-none bg-midGrey placeholder:text-black placeholder:opacity-50 pl-4 rounded-sm" />
                        </label>
                        <label htmlFor="phone" className="w-full sm:w-auto">
                            <input type="tel" id="phone" placeholder="Your Phone"  className="w-full sm:w-60 h-12 outline-none bg-midGrey placeholder:text-black placeholder:opacity-50 pl-4 rounded-sm" />
                        </label>
                    </div>
                    <textarea name="message" placeholder="Your Message" id="name" cols="80" rows="10"  className="w-full h-52 outline-none bg-midGrey placeholder:text-black placeholder:opacity-50 pl-4 pt-4 rounded-sm"></textarea>
                    <div className="w-full flex items-center justify-center sm:justify-end">
                        <button className="w-56 h-14 text-center bg-brightRed text-lightGrey rounded-sm border-[1px] border-brightRed hover:bg-transparent hover:text-brightRed transition-all duration-300">Send Message</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact