import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../NavbarElements";
// import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
        <img id="logo" alt="logo" src=".../picthers/logo.png" />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            בית
          </NavLink>
          <NavLink to="/Detail" activeStyle>
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
