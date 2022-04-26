import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './menu.css'

function Menu() {
  return (
        <div className='menu-items'>
            <div className='menu-item'>
                <span><PersonIcon/></span>
                <span>حسابي</span>
            </div>
            <div className='menu-item'>
                <span><ShoppingCartIcon/></span>
                <span>10</span>
            </div>
        </div>
  )
}

export default Menu