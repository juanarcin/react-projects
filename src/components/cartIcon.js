import { connect } from 'react-redux';
import { 
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { FaShoppingCart} from "react-icons/fa";

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


function cartCount(props) {

  return (
    <Cart>
    	{/*// if we have any items in cart, display the count*/}
    	{props.itemsInCart <= 0 ? ''  : <CartItems>{ props.itemsInCart }</CartItems>}
    	<Link to="/cart">
    		<FaShoppingCart />
    	</Link>
    </Cart>

  );
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.itemsInCart
  }
}
export default connect(mapStateToProps)(cartCount);
