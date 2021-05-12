import {useEffect} from 'react';
import { connect } from 'react-redux';
import Product from '../components/product.js';

function Home(props) {

  return (
    <ul id="products-list">
      {Object.entries(props.products).map(([key, value]) => {
        return(
          value.map( product => {
            return (
                <Product product={product} key={product.id} />
            )
          })
        )    
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);
