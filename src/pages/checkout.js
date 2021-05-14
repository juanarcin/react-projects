import { useState } from 'react';
import { connect } from 'react-redux';
import Keys from '../components/private/keys.js';

import GoogleLogin from 'react-google-login';
import { FaCaretDown } from 'react-icons/fa';
import CheckoutButton from '../components/private/checkoutButton.js'

function CheckOut(props) {
  const [redirect, shouldRedirect] = useState(false)

  function login(response){
    let name = response.profileObj.givenName;
    let email = response.profileObj.email;
    let avatar = response.profileObj.imageUrl;
    //update state
    shouldRedirect(true)

    // update redux
    props.storeUser(name, email, avatar)
  } 


  if(redirect){
  	return (
  		<div className="login-box">
  		you're in
  		</div>
  	)
  }	else {
  	return (
  		<div className="login-box">
  			<div className="login-option">
  				<h3>Log in with Google</h3>
  				<p>for fastest checkout experience, please log in with your google account</p>

	        <GoogleLogin 
	          clientId={Keys.google}
	          buttonText="Login"
	          onSuccess={login}
	          onFailure={login}
	          cookiePolicy={'single_host_origin'}
	        />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (name, profilePicture) => { dispatch({type: 'LOGIN', name: name, profilePicture: profilePicture}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
