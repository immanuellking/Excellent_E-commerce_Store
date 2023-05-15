import React from 'react'
import SectionHeader from './SectionHeader'
import Products from './Products';
import pad from "../assets/pad.png"

const data = [
    {
        id: 1,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 2,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 3,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 4,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 5,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 6,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 1,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 2,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 3,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 4,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 5,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
    {
        id: 6,
        discount: "-40%",
        img: pad,
        name: "HAVIT HV-G92 Gamepad",
        price: {
            currentPrice: 120,
            oldPrice: 160
        }
    },
]

const Todays = () => {
  return (
    <div className="mx-3 my-12 space-y-14 lg:mx-12 lg:my-20 w-full">
        <SectionHeader />
        <Products data={data}/>
    </div>
  )
}

export default Todays