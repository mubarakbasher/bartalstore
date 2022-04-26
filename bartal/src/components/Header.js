import React from 'react'
import Menu from './Menu'
import './header.css'
import logo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
            <img src={logo} alt=""/>
            <div className='header-search'>
                <input className='header-searchinput' type='text' placeholder='ابحث عن المنتج'/>
                <SearchIcon className='header-searchicon'/>
            </div>
        <Menu/>
    </div>
  )
}



export default Header