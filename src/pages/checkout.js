import { useState } from 'react';
import { connect } from 'react-redux';

import LoginButton from '../components/loginButton.js';
import { FaCaretDown } from 'react-icons/fa';
import CheckoutButton from '../components/checkoutButton.js';
import StripeNote from '../components/stripeNote.js';

function CheckOut(props) {
  const [redirect, shouldRedirect] = useState()

  function startRedirect(){
    shouldRedirect(true)
  }


  console.log(props.logedin)

  if(props.logedin || redirect){
  	return (
  		<div className="center">
        <div className="checkout-container">
          <img src={props.avatar} />
    			{props.logedin ? <h3>Hello {props.name},</h3> : ''}
    			<p>Thank you for shopping with us! You currently have {props.qty} items in your cart for a total of ${parseFloat(props.amount).toFixed(2)}</p>
    			<CheckoutButton email={props.email} name={props.name} amount={props.amount} avatar={props.avatar}/>
        </div>
        <StripeNote />
  		</div>
  	)
  }	else {
  	return (
  		<div className="login-box">
  			<div className="login-option">
  				<h3>Log in with Google</h3>
  				<p>for fastest checkout experience, please log in with your google account</p>

	        <LoginButton />
  			</div>
  			<div className="guest-option">
  				<h3>Checkout as Guest</h3>
  				<p>You can also proceed as a guest</p>
  				<button id="guest" onClick={() => startRedirect()}>Proceed as Guest</button>
  			</div>
  		</div>
  	)
  }
}


const mapStateToProps = (state) => {
  return {
    logedin: state.user.loggedIn,
    name: state.user.fullName,
    email: state.user.email,
    avatar: state.user.profilePicture,
    amount: state.shoppingCartTotal
  }
}

export default connect(mapStateToProps)(CheckOut);
