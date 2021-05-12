import {useState} from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Product from './product.js';

import { FaInfoCircle } from 'react-icons/fa';

function ProductPage(props) {
  const [inCart, addToCart] = useState()
	let { id } = useParams();
	let displayProduct = props.products.find(item => item.id == id);
	console.log(displayProduct)
  function addItemToCart(product, id){
    if(!displayProduct.inCart){
      props.addToCart(product)
      addToCart(id)
    }
  }
  return (
		<div>
      <ul id="products-list" className="single-product">
      	<Product product={displayProduct} key={displayProduct.id} />
      	<li><p className="single-product-description">{displayProduct.description}</p></li>
      	<li>
      	<div 
      			className={ displayProduct.inCart === false ? 'add-to-cart' : 'add-to-cart in-cart' }  
      			onClick={() => addItemToCart(displayProduct, displayProduct.id)}>
      			{ displayProduct.inCart === false ? 'Add to Cart' : 'Added to Cart' } 
    			</div>
    		</li>

      </ul>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
