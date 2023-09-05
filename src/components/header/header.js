
// import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavDropdownItem,NavDropdownMenu } from './headerStyle';
import logoImg from '../picthers/logoImg.png'

import { Dropdown, Menu } from 'semantic-ui-react'



const Header = () => {

  return (
    <>
      <Nav>
        <Bars />
        <img id='logo' alt='logo' src={logoImg}/>
        <NavMenu>
          <NavLink to='/'  activeStyle>
            בית
          </NavLink>
          <NavLink to="/about" activeStyle>
            אודות
          </NavLink>
          <NavLink to="/contact_us" activeStyle>
            צור קשר
          </NavLink>
          <NavLink to='/blog' activeStyle>
            בלוג
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">התחברות</NavBtnLink>
          <NavBtnLink to="/register"> משתמש חדש</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Header;
