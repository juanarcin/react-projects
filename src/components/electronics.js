import {useEffect} from 'react';
import { connect } from 'react-redux';
import Product from './product.js';

function Electronics(props) {
  return(
    <ul id="products-list">
      {props.products.electronics.map( product => {
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

export default connect(mapStateToProps)(Electronics);
