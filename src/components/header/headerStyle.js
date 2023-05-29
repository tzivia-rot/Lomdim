import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
border-bottom: 1px solid black;
direction:rtl;
background: #E5E3E3;
height: 85px;
display: flex;
justify-content: space-between;
z-index: 12;
`;

export const NavLink = styled(Link)`
font-size: 15px;
color: black;
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
color: #808080;
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
background: #002B6D;
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
