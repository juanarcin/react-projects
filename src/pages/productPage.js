
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Product from '../components/product.js';

import { FaInfoCircle } from 'react-icons/fa';
import AddToCartButton from '../components/addToCart.js';
import RelatedItems from '../components/relatedItems.js';

function ProductPage(props) {
  // grab item id from the url
  let { id } = useParams();

  // find item by id and display it
  let displayProduct = props.products.find(item => item.id == id);

  return (
		<div>
      <ul id="products-list" className="single-product">
      	<Product product={displayProduct} key={displayProduct.id} />
      </ul>
      <RelatedItems />
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
