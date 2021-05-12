import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";




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


function MobileNavToggle(props) {

  return (
    <Toggle>
      {props.navOpen === true ? <FaTimes onClick={props.toggleNav} className="toggle" id="close" /> : <GiHamburgerMenu onClick={props.toggleNav} className="toggle" /> }
    </Toggle>
  );
}

const mapStateToProps = (state) => {
  return {
    navOpen: state.navOpen,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => { dispatch({type: 'TOGGLE_NAV' }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavToggle);
