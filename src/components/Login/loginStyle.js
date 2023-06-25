
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
`;


export const NavBtn = styled.nav`
align-items: center;
`;

export const NavBtnLink = styled(Link)`
text-align: left;
border-radius: 4px;
background: #2E59A7;
color: white;
padding: 10px 22px;
text-decoration: none;
/* Second Nav */
&:hover {
	transition: all 0.2s ease-in-out;
	background: #a1a0a0;
	color: #000000;
}
`;