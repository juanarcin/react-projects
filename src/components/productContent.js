import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { FaInfoCircle } from 'react-icons/fa';

import AddToCartButton from '../components/addToCart.js';

function Product(props) {
    let total = 0;

  function storePrices(){
    let itemPrices = []
    props.shoppingCart.forEach(function(i){
      itemPrices.push(parseFloat(i.price))
    })
    return itemPrices
  }
  function getTotal(){
    let prices = storePrices()
    let finalPrice = prices.reduce((a, b) => a + b, 0)
    total = finalPrice;
    console.log( total)
  }
  getTotal()

  return (
    <div className="product-info">
      <div className="content-width title">{props.product.title}</div>
      <div className="content-width description">{props.product.description}</div>
      <div className="content-width price">{props.product.price}</div>
      <div className="details">
        <Link to={`products/${props.product.id}`} >
          <FaInfoCircle /> view full details
        </Link>
      </div>
      <AddToCartButton product={props.product} />
    </div> 
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) },
    addToCart: (product) => { dispatch({type: 'ADD_TO_CART', product: product }) },
    updateQty: (qty, id) => {dispatch({type: 'UPDATE_QTY', qty: qty, id: id})}
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
