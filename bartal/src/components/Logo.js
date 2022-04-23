import React from 'react'
import logo from './images/logo.png'
import styled from 'styled-components'
import search from './images/search.png'

const Logo = () => {
  return (
    <div>
        <Nav>
            <Image src={logo} alt=""/>
            <Search type='text' placeholder='ابحث عن المنتج'/>
        </Nav>
    </div>
  )
}

const Image = styled.img`
    width: 120px;
`;

const Nav = styled.nav`
    width :100%;
    height: 80px;
    background-color: #1aef79;
    position: relative;
    padding: 10px;
    display : flex;
    justify-content: space-evenly;
`;

const Search = styled.input`
    width:50%;
    font-size: 1.5em;
    border: none;
    border-radius: 8px ;
    margin: 8px ;
    padding: 10px;
    background-image: url('${search}');
    &:focus {
        outline: none;
        border: 1px solid blue;
 }
`;

export default Logo