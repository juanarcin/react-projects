import { connect } from 'react-redux';
import Product from '../components/product.js';
import { ImSad } from 'react-icons/im';

function Cart(props) {



  if(props.shoppingCart <= 0){
    return <p className="center sad"><span><ImSad /></span>Your cart is empty</p>
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
        <div className="final-total">Total: ${parseFloat(props.total).toFixed(2)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
    total: state.shoppingCartTotal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
