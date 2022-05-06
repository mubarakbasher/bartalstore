import React from 'react'
import ProductImage from './images/hh.jpg'
import './product.css'

function Product() {
  return (
    <div className='product'>
        <div >
            <img className='product-img' src={ProductImage} alt='' />
        </div>
        <div className='product-detil'> 
            <h2> نعال اسطورية</h2>
            <h3>737SDG</h3>
            <button>اضافة للسلة</button>
        </div>
    </div>
  )
}

export default Product