import {useEffect} from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';

function Clothing(props) {
  return(
    <ul id="products-list">
      {props.products.clothing.map( product => {
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

export default connect(mapStateToProps)(Clothing);
