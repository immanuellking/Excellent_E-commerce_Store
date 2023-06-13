import React from 'react'

const Button = ({title}) => {
  return (
    <div className="flex-center">
        <button className="py-3 px-8 border-2 bg-brightRed border-brightRed rounded-md font-medium text-lightGrey hover:text-brightRed hover:bg-lightGrey hover:border-2 hover:border-brightRed transition-all duration-500">
            {title}
        </button>
    </div>
  )
}

export default Button