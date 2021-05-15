import { useState } from 'react';
import { connect } from 'react-redux';
import Keys from '../components/private/keys.js';

import LoginButton from '../components/loginButton.js';
import { FaCaretDown } from 'react-icons/fa';
import CheckoutButton from '../components/checkoutButton.js'

function CheckOut(props) {
  const [redirect, shouldRedirect] = useState(props.user.loggedIn)
  console.log(props.user)

  function login(response){
    let firstName = response.profileObj.givenName;
    let fullName = response.profileObj.name;
    let email = response.profileObj.email;
    let avatar = response.profileObj.imageUrl;
    //update state
    shouldRedirect(true)

    // update redux
    props.storeUser(firstName, fullName, email, avatar)

    console.log(firstName, fullName, email, avatar)
    console.log(props.user)
    //update state
    shouldRedirect(true)
  } 


  console.log(props.user.loggedIn)
  if(redirect){
  	return (
  		<div className="center">
  			{props.user.loggedIn ? <h3>Hello {props.user.fullName},</h3> : ''}
  			<p>Thank you for shopping with us! You currently have {props.qty} items in your cart for a total of ${props.amount}</p>
  			<CheckoutButton user={props.user} amount={props.amount} />
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
  				<button id="guest" onClick={() => shouldRedirect(true)}>Proceed as Guest</button>
  			</div>
  		</div>
  	)
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    amount: state.shoppingCartTotal,
    qty: state.itemsInCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (firstName, fullName, email, profilePicture) => { dispatch({type: 'LOGIN', firstName: firstName, fullName: fullName, profilePicture: profilePicture, email: email}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
