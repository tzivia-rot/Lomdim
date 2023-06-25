import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
 
// export const Dropdown = styled.nav``
// export const NavDropdownItem = styled.nav``
// export const NavDropdownMenu = styled.nav``

export const Nav = styled.nav`
box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
background-color: white;
direction:rtl;
height: 60px;
display: flex;
justify-content: space-around;
z-index: 12;
`;

export const NavLink = styled(Link)`
font-size: 17px;
color: black;
font-weight: 500;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.hover {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
${'' /* color: #808080; */}
@media screen and (max-width: 500px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	${'' /* transform: translate(-100%, 75%); */}
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #2E59A7;
color: white;
padding: 10px 22px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #D3CFCF;
	color: #808080;
}
`;
