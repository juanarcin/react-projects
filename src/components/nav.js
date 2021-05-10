
import { connect } from 'react-redux';
import { 
  Link, 
  useLocation 
} from "react-router-dom";
import styled from 'styled-components';




const NavMenu = styled.nav`
  height: 40px;
  position: absolute;;
  z-index: 16;
  background: #333;
  width: 60%;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 10px;
  opacity: 1;
  z-index: 2;
  transition: all ease .5s;
  &.closed{
    left:-1000px;
    opcacity: 0;
  }
  & a{
    color:#ccc;
    text-decoration: none;
    font-weight: bold;
  }
  & ul{
    margin: 40px 0 0;
    padding: 0;
    & li{
      display: block;
      padding: 10px 0;
    }
  }  
  @media screen and (min-width: 600px){
    position: relative;
    left: 0;
    opacity: 1;
    background: transparent;
    &.closed{
      left: 0;
    }
  }
`;


function Nav(props) {

  return (

      <NavMenu className={props.navOpen ? 'open' : 'closed'}>
        <ul>
          <li onClick={props.toggleNav}><Link to="/">All Products</Link></li>
          <li onClick={props.toggleNav}><Link to="/clothing">All Clothing</Link></li>
          <li onClick={props.toggleNav}><Link to="/womens-clothing">Women's Clothing</Link></li>
          <li onClick={props.toggleNav}><Link to="/mens-clothing">Men's Clothing</Link></li>
          <li onClick={props.toggleNav}><Link to="/electronics">Electronics</Link></li>
          <li onClick={props.toggleNav}><Link to="/jewelery">Jewelery</Link></li>
          <li onClick={props.toggleNav}><Link to="/cart">Shopping Cart</Link></li>
        </ul>
      </NavMenu>
  );
}

const mapStateToProps = (state) => {
  return {
    navOpen: state.navOpen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => { dispatch({type: 'TOGGLE_NAV' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
