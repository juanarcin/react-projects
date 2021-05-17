import { useState } from 'react';
import { connect } from 'react-redux';
import Keys from '../components/private/keys.js';
import GoogleLogin from 'react-google-login';

function ReduxTest(props) {
  const [isValueTrue, setValue] = useState(props.logedin)
 //in redux state.isTrue is set to false

  function login(response){
    // update state and redux
    props.updateRedux(response.profileObj, true)
    setValue(props.logedin)

    // store user info
  }
  function logout(){
    props.updateRedux(false)
    setValue(props.logedin)
  }
  function responseGoogle(response){
    console.log('test')
  } 
  if(props.logedin){
    return (
      <div className="logged-in">
        Welcome {props.name} | <span onClick={logout} >Log out</span>
      </div>
    )
  } else {
    return (
      <span id="login-button">
        <GoogleLogin 
          clientId={Keys.google}
          buttonText="Login"
          onSuccess={login}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logedin: state.user.loggedIn,
    name: state.user.firstName,
    avatar: state.user.profilePicture
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRedux: (data, loggedIn) => { dispatch({type: 'TEST', data: data, loggedIn: loggedIn}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);

      // // <div id="nav-login-button">
      //   <GoogleLogin 
      //     clientId={Keys.google}
      //     buttonText="Login"
      //     onSuccess={login}
      //     onFailure={responseGoogle}
      //     cookiePolicy={'single_host_origin'}
      //   />
      // // </div>