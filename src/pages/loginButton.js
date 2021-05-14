import { useState } from 'react-redux';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

function LoginButton(props) {
	const [loggedIn, login] = useState(false)

	function responseGoogle(response){
		console.log(response)
		console.log(response.profileObj)
	} 


	function login(response){
		// update redux
		//update state
	} 


	if(props.user.loggedIn){
		return <span>Welcome!</span>
	} else {

	  return (
	    <div id="nav-login-button">
	    	<GoogleLogin 
		    	clientId="7764698649-k3i0qea2cf2b9l45tvkt3enkftjdut52.apps.googleusercontent.com"
		    	buttonText="login"
		    	onSuccess={responseGoogle}
		    	onFailure={responseGoogle}
		    	cookiePolicy={'single_host_origin'}
	    	/>
	    </div>
	  );
	}
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user,
  }
}

export default connect(mapStateToProps)(LoginButton);
