import React from 'react'
import Product from './Product'

const Products = ({data}) => {
  return (
    <div className="flex space-x-2 max-w-6xl overflow-x-scroll">
        {data.map((item, index) => (
            <Product key={item.id + index} {...item} />
        ))
        }
    </div>
  )
}

export default Products