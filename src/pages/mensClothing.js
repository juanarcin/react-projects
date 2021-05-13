import {useEffect} from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';

function MensClothing(props) {
  return(
    <ul id="products-list">
      {props.products.clothing.map( product => {
        if(product.category === 'men\'s clothing') {
          return (
            <Product product={product} key={product.id} />
          )
        }
      })}
    </ul>
  )    
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(MensClothing);
