import React from 'react'
import Menu from './Menu'
import './header.css'
import logo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({click}) => {
  return (
    <div className='header'>
            <Link to="/">
            <img src={logo} alt=""/>
            </Link>
            <div className='header-search'>
                <input className='header-searchinput' type='text' placeholder='ابحث عن المنتج'/>
                <SearchIcon className='header-searchicon'/>
            </div>
        <Menu/>

        <div className='menu-icon' onClick={click}>
            <Link to="/cart">
            <div className='menu-item'>
                <span>10</span>
                <ShoppingCartIcon/>
            </div>
            </Link>
            <MenuIcon/>
        </div>
    </div>
  )
}



export default Header