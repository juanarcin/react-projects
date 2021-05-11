
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Product(props) {
  return (
    <li key={props.product.id} className="productBox">
      <div className="product-image"><img src={props.product.image} alt={props.product.title} /></div>
      <div className="content-width title">{props.product.title}</div>
      <div className="content-width price">{props.product.price}</div>
      <div className="content-width category">found in : {props.product.category}</div>
      <button onClick={() => props.addToCart(props.product)} >add to cart</button> <Link to={`products/${props.product.id}`} >view full details</Link>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => { dispatch({type: 'ADD_TO_CART', product: product }) }
  }
}

export default connect(null, mapDispatchToProps)(Product);
