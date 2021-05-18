import { connect } from 'react-redux';

import ShoppingImage from '../components/bags.png'

function Home(props) {

  return (
    <div>
    	<div className="container">
    		<h2> Welcome to my Fake Store!</h2>
    		<p>This is a sample of a simple react store. It has a shopping cart that counts amount of products and calculates total, as well as a  list of products that are generated dynamically. Some of the features include:</p>
	      <ul className="left">
	      	<li>Connected to <a href="https://fakeStoreApi.com" target="_blank" rel="noreferrer">Fake Store Api</a> using <span className="strong">
	      	<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noreferrer">fetch</a></span> to populate</li>
	      	<li>All products stored in <span className="strong"><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a></span></li>
	      	<li>Used <span className="strong"><a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a></span> for payment processing</li>
	      	<li>Used <span className="strong">OAuth</span> to access <span className="strong"><a href="https://developers.google.com/identity/sign-in/web/sign-in" target="_blank" rel="noreferrer">Google's API</a></span> for account login</li>
	      	<li>All code can be seen in <span className="strong"><a href="https://github.com/juanarcin/react-shop" target="_blank" rel="noreferrer">Github</a></span></li>
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

export default connect(mapStateToProps)(Home);
