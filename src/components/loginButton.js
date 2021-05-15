import { useState } from 'react';
import { connect } from 'react-redux';
import Keys from '../components/private/keys.js';
import GoogleLogin from 'react-google-login';
import { FaCaretDown } from 'react-icons/fa';

function LoginButton(props) {
  const [loggedIn, setLogin] = useState(props.user.loggedIn)
  const [userFirstName, setUserFirstName] = useState(null)
  const [userFullName, setUserFullName] = useState(null)
  const [userProfilePicture, setUserProfilePicture] = useState(null)

  function responseGoogle(response){
    console.log('test')
  } 


  function login(response){
    let fullName = response.profileObj.name;
    let firstName = response.profileObj.givenName;
    let email = response.profileObj.email;
    let avatar = response.profileObj.imageUrl;
    console.log(response.profileObj)
    //update state
    setUserFirstName(firstName)
    setUserFullName(fullName)
    setUserProfilePicture(avatar)
    // update redux
    props.storeUser(firstName, fullName, email, avatar)
    console.log('TEST')
    setLogin(props.user.loggedIn)
  } 


  function logOut(){
    //update state
    setLogin(false)
    setUserFirstName(null)
    setUserFullName(null)
    setUserProfilePicture(null)
    // update redux
    props.storeUser('LOGOUT', null, null)
  } 


  if(props.user.loggedIn){
    return (
      <div id="nav-login-button" className="logged-in">
       <img src={userProfilePicture} alt="user profile picture" /> Welcome {userFirstName}  <FaCaretDown />
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
    storeUser: (firstName, fullName, email, profilePicture) => { dispatch({type: 'LOGIN', firstName: firstName, fullName: fullName, profilePicture: profilePicture, email: email}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
