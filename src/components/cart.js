import { connect } from 'react-redux';
import Product from './product.js';

function Cart(props) {



  if(props.shoppingCart <= 0){
    return <p>Your cart is empty</p>
  } else {
    return (
      <div id="cart">
        <ul id="products-list" className="cart-page">
        {props.shoppingCart.map( product => {
          return (
            <Product product={product} key={product.id} />
          )
        })}
        </ul>
        <div class="final-total">Total: </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
