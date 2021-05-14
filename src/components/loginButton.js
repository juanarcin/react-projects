import { useState } from 'react';
import { connect } from 'react-redux';
import Keys from '../components/private/keys.js';
import GoogleLogin from 'react-google-login';
import { FaCaretDown } from 'react-icons/fa';

function LoginButton(props) {
  const [loggedIn, setLogin] = useState(false)
  const [userName, setUserName] = useState(null)
  const [userProfilePicture, setUserProfilePicture] = useState(null)

  function responseGoogle(response){
    console.log('test')
  } 


  function login(response){
    let name = response.profileObj.givenName;
    let email = response.profileObj.email;
    let avatar = response.profileObj.imageUrl;
    //update state
    setLogin(true)
    setUserName(name)
    setUserProfilePicture(avatar)
    // update redux
    props.storeUser(name, email, avatar)
    console.log(response.profileObj)
  } 


  function logOut(){
    //update state
    setLogin(false)
    setUserName(null)
    setUserProfilePicture(null)
    // update redux
    props.storeUser('LOGOUT', null, null)
  } 


  if(loggedIn){
    return (
      <div id="nav-login-button" className="logged-in">
       <img src={userProfilePicture} alt="user profile picture" /> Welcome {userName}  <FaCaretDown />
        <div className="logout" onClick={logOut}>
          Log out
        </div>
      </div>
    )
  } else {

    return (
      <div id="nav-login-button">
        <GoogleLogin 
          clientId={Keys.google}
          buttonText="Login"
          onSuccess={login}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (name, email, profilePicture) => { dispatch({type: 'LOGIN', name: name, profilePicture: profilePicture, email: email}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
