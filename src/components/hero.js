import { connect } from 'react-redux';
import Product from '../components/product.js';
import SortedItems from '../components/sortedItems.js';

import ShoppingImage from './bags.png'

function Hero(props) {

  return (
    <div id="hero">
    	<div className="container">
	      <ul className="left">
	      	<li>Connected to <a href="https://fakeStoreApi.com" target="_blank">Fake Store Api</a> using <span>fetch</span> to populate</li>
	      	<li>All products stored in <span>Redux</span></li>
	      	<li>Used <span>Stripe</span> for payment processing</li>
	      	<li>Used <span>OAuth</span> to access <span>Google's API</span> for account login</li>
	      	<li>All code can be seen in <span>Github</span></li>
	      </ul>
	      <img src={ShoppingImage} alt="Logo" className="shopping-image" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    allProducts: state.allProducts
  }
}

export default connect(mapStateToProps)(Hero);
