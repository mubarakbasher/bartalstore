import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
  return (
        <div className='menu-items'>
            <Link to='/account'>
            <div className='menu-item'>
                <span><PersonIcon/></span>
                <span>حسابي</span>
            </div>
            </Link>
            <Link to="/cart">
            <div className='menu-item'>
                <span><ShoppingCartIcon/></span>
                <span>10</span>
            </div>
            </Link>
        </div>
  )
}

export default Menu