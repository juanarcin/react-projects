
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

import RelatedItem from '../components/relatedItem.js';

function ProductPage(props) {
  // grab item id from the url
  let { id } = useParams();

  // find item by id 
  let currentItem = props.products.find(item => item.id == id);

  return (
		<div>
      <h3 className="related-items">Related Items</h3>
      <ul id="relatedItems">
        {props.products.map( product => {
          console.log(product.category, currentItem.category)
          if(product.category === currentItem.category && product.id !== currentItem.id){
            return (
              <li className="related-product-image" key={product.id}><RelatedItem item={product}  /></li>
            )
          } else {
            return null
          }
        })}
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
