import React from 'react'

const Category = ({id, Icon, title}) => {
  return (
    <div className="w-44 h-36 border-[1px] border-black flex-center flex-col text-black hover:bg-brightRed hover:border-brightRed hover:text-lightGrey transition-all duration-500">
        <Icon className="text-5xl"/>
        <p className="text-base font-normal pt-5">{title}</p>
    </div>
  )
}

export default Category