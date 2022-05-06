import React from 'react'
import Product from './Product'
import './products.css'

function Products() {
  return (
    <div className='products'>
      <div className='products-title'>
        <span>الملابس</span>
        <span>المزيد</span>
      </div>
      <div className='products-list'>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default Products