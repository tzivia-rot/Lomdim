
// import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavDropdown } from './headerStyle';
import logoImg from '../picthers/logoImg.png'

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
          {/* <NavDropDown title="חומרי לימוד">
            <NavDropDown.Item to='אנגלית'>אנגלית</NavDropDown.Item>
            <NavDropDown.Item to='מתמטיקה'>מתמטיקה</NavDropDown.Item>
            <NavDropDown.Item to='עברית'>עברית</NavDropDown.Item>
            <NavDropDown.Item to='מדעים'>מדעים</NavDropDown.Item>
          </NavDropDown> */}
          <NavLink to='/חומרי_לימוד' activeStyle>
            חומרי לימוד
          </NavLink>
          <NavLink to="/about" activeStyle>
            אודות
          </NavLink>
          <NavLink to="/called" activeStyle>
            צור קשר
          </NavLink>
          <NavLink to='/blog' activeStyle>
            בלוג
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">התחברות</NavBtnLink>
          <NavBtnLink to="/register">יצירת פרופיל מורה חדש</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
