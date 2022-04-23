import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Menu() {
  return (
    <div>
        <Nav>
            <List>
                <ListItem>
                    <HomeIcon/>
                    <span>الرئسية</span> 
                </ListItem>
                <ListItem> 
                    <TableRowsIcon/>
                    <span>الفئات</span>
                </ListItem>
                <ListItem> 
                    <PersonIcon/>
                    <span>حسابي</span>
                </ListItem>
                <ListItem>
                    <ShoppingCartIcon/>
                    <span>السلة</span>
                </ListItem>
            </List>
        </Nav>
    </div>
  )
}

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    padding-bottom: 10px;
    -webkit-box-shadow: 0px -5px 10px -9px rgba(0,0,0,0.51); 
    box-shadow: 0px -5px 10px -9px rgba(0,0,0,0.51);
`;

const List = styled.ul`
    List-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 1.5em;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;


export default Menu