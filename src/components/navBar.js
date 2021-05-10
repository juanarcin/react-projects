import {useState} from 'react';
import { 
  Link, 
  useLocation 
} from "react-router-dom";
import styled from 'styled-components';
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

import Nav from "./nav.js";


const Header = styled.header`
  height: 40px;
  position: relative;
  z-index: 16;
  background: #2b3a54;
`;
const Logo = styled.h1`
  display:inline-block;
  margin: 0;
  padding: 0 0 0 30px;;
  font-size: 20px;
  color:#fff;
`;


const Toggle = styled.div`
  display:inline-block;
  padding: 10px;
  position: relative;
  z-index: 3;
  cursor: pointer;
  color:#fff;
  & .toggle{
    position: absolute;
    left: 10px;
    top: 5px;
    &#close{
    }
  }
  @media screen and (min-width: 600px){
    display:none;
  }
`;
const Cart = styled.div`
  display:inline-block;
  padding: 10px;
  float: right;
  color:#fff;
`;


function NavBar() {
   const [navOpen, toggleNav] = useState(false)

   function closeNav(){
    toggleNav(false)
   }
   function openNav(){
    toggleNav(true)
   }

  return (
    <Header>
      <Toggle>
        {navOpen === true ? <FaTimes onClick={closeNav} className="toggle" id="close" /> : <GiHamburgerMenu onClick={openNav} className="toggle" /> }
      </Toggle>
      <Logo>Juans Shop</Logo>
      <Nav navStatus={navOpen} />
      <Cart><FaShoppingCart /></Cart>
    </Header>
  );
}

export default NavBar;
