
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

function ProductPage(props) {
	let { id } = useParams();
	let displayProduct = props.products.find(item => item.id == id)
	console.log(displayProduct)
  return (
		<div>
      <h2 className="content-width title">{displayProduct.title}</h2>
			<div className="product-image"><img src={displayProduct.image} alt={displayProduct.title} /></div>
      <p className="content-width description">{displayProduct.description}</p>
      <div className="content-width price">{displayProduct.price}</div>
    
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
    products: state.allProducts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
