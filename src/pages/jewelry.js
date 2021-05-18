import { connect } from 'react-redux';
import Product from '../components/product.js';

function Jewelery(props) {
  return(
    <ul id="products-list">
      {props.products.jewelry.map( product => {
        return (
          <Product product={product} key={product.id} />
        )
      })}
    </ul>
  )    
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Jewelery);
