import styled from 'styled-components';

import Nav from "./nav.js";

const NavContainer = styled.div`
position: absolute{
  left: 0;
  top:0;
}
  @media screen and (min-width: 600px){
    display:none;
  }
`;

function MobileNav(props) {

  return (
      <NavContainer>
        <Nav />
      </NavContainer>
  );
}

export default MobileNav;
