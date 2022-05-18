import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './slideshow.css'

function Slideshow({show , click}) {
  const slideshowClass = ["slide-show"]
  if(show){
    slideshowClass.push("show")
  }
  return (
    <div className={slideshowClass.join(" ")}>
      <ul className='side-show' onClick={click}>
          <li>
              <span><CloseIcon/></span>
          </li>
          <li>
            <Link to="/">
              <span>الرئسية</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>من نحن</span>
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <span>اتصل بنا</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <span>حسابي</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
            <span><ShoppingCartIcon/></span>
                <span>10</span>
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Slideshow