import React from 'react';
import { category } from '../data';
import Category from './Category';

const Categories = ({slideRef}) => {
  return (
    <div className="flex mt-10 space-x-5 lg:space-x-8 overflow-x-scroll lg:overflow-x-hidden" ref={slideRef} >
      {category.map((item) => (
        <div key={item.id} className='m-3'>
            <Category {...item} />
        </div>
      ))}
    </div>
  )
}

export default Categories