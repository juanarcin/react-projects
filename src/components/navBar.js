import { connect } from 'react-redux';
import { Link  } from "react-router-dom";
import styled from 'styled-components';

import Nav from "./nav.js";
import MobileNavToggle from "./mobileNavToggle.js";
import MobileNav from "./mobileNav.js";
import CartIcon from "./cartIcon.js";


const Header = styled.header`
  height: 40px;
  width: 100%;
  position: fixed;
  z-index: 16;
  background: #2b3a54;
  padding: 0 15px;
  box-sizing: border-box;
`;
const Logo = styled.h1`
  display:inline-block;
  margin: 0;
  padding: 0 0 0 30px;;
  font-size: 20px;
  color:#fff;
  & a{
    color:#fff;
    text-decoration: none;
  }
}
  @media screen and (min-width: 600px){
    padding: 0;
  }
`;

function NavBar(props) {

  return (
    <Header>
      <div className="container">
        <MobileNavToggle />
        <Logo><Link to="/">Juans Shop</Link></Logo>
        <CartIcon />
      </div>
      <MobileNav />
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.itemsInCart
  }
}
export default connect(mapStateToProps)(NavBar);
