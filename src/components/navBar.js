import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
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
  width: 100%;
  position: fixed;
  z-index: 16;
  background: #2b3a54;
`;
const Logo = styled.h1`
  display:inline-block;
  margin: 0;
  padding: 0 0 0 30px;;
  font-size: 20px;
  color:#fff;
}
  @media screen and (min-width: 600px){
    padding: 0;
  }
`;

const MobileNav = styled.div`
position: absolute{
  left: 0;
  top:0;
}
  @media screen and (min-width: 600px){
    display:none;
  }
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
  & a{
    color: #fff;
  }
`;
const CartItems = styled.span`
  display: inline-block;
  background: red;
  width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 10px;
  line-height: 15px;
  position: relative;
  top: -5px;
  font-size: 10px;
`;


function NavBar(props) {

  return (
    <Header>
      <div className="container">
        <Toggle>
          {props.navOpen === true ? <FaTimes onClick={props.toggleNav} className="toggle" id="close" /> : <GiHamburgerMenu onClick={props.toggleNav} className="toggle" /> }
        </Toggle>
        <Logo>Juans Shop</Logo>
        <Cart>{props.itemsInCart <= 0 ? ''  : <CartItems>{ props.itemsInCart }</CartItems>}<Link to="/cart"><FaShoppingCart /></Link></Cart>
      </div>
      <MobileNav>
        <Nav />
      </MobileNav>
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {
    navOpen: state.navOpen,
    itemsInCart: state.itemsInCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => { dispatch({type: 'TOGGLE_NAV' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
