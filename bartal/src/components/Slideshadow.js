import React from 'react';
import './slideshadow.css';

function Slideshadow({show , click}) {
  return (
   show && <div className='slide-shadow' onClick={click}></div>
  )
}

export default Slideshadow