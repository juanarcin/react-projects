import {useState} from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';

import { FaInfoCircle } from 'react-icons/fa';

function AddToCart(props) {

	// check if item is in cart
  const [inCart, addToCart] = useState()

  // add item into cart
  function addItemToCart(product, id){

  	// if item is not in cart (verified from redux product object)
    if(!props.product.inCart){

    	// dispatch action to add to cart
      props.addToCart(product)

      // just to trigger re-render
      addToCart(id)
    }
  }

  return (
		<div 
			className={ props.product.inCart === false ? 'add-to-cart' : 'add-to-cart in-cart' }  
			onClick={() => addItemToCart(props.product, props.product.id)}>
			{ props.product.inCart === false ? 'Add to Cart' : 'Added to Cart' } 
		</div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => { dispatch({type: 'ADD_TO_CART', product: product }) }
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.allProducts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
