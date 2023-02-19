import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //sign in stuff

    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,

        });

      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt='fb logoo' />

        <img src='https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png' alt='fb title' />

      </div>
      <Button type='submit' onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;