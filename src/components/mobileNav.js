import { connect } from 'react-redux';
import styled from 'styled-components';

import Nav from "./nav.js";

const MobileNav = styled.div`
position: absolute{
  left: 0;
  top:0;
}
  @media screen and (min-width: 600px){
    display:none;
  }
`;

function NavBar(props) {

  return (
      <MobileNav>
        <Nav />
      </MobileNav>
  );
}

export default NavBar;
