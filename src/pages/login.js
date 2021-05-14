import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

function Login(props) {

	function responseGoogle(response){
		console.log(response)
		console.log(response.profileObj)
	} 

  return (
    <div>
    	test
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    allProducts: state.allProducts
  }
}

export default connect(mapStateToProps)(Login);
