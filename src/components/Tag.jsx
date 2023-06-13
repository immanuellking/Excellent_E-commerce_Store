import React from 'react'

const Tag = ({title}) => {
  return (
    <div className="flex space-x-4 items-center">
            <div className="w-3 h-10 bg-brightRed rounded-[4px]"></div>
            <h3 className="text-base font-semibold text-brightRed">{title}</h3>
    </div>
  )
}

export default Tag