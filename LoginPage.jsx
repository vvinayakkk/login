import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = (response) => {
    console.log('Google Login Response:', response);
    setEmail(response.profileObj.email);
  };

  const handleFacebookLogin = (response) => {
    console.log('Facebook Login Response:', response);
    setEmail(response.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter your email and password.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="background">
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            Don't have an account yet? <a href="#">Sign Up</a>
          </div>
        </form>
        <div className="or-option">Or</div>
        <div className="external-login-container">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleGoogleLogin}
            onFailure={(error) => console.log(error)}
            cookiePolicy={'single_host_origin'}
            className="google-login-button"
          />
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            onClick={handleFacebookLogin}
            callback={handleFacebookLogin}
            cssClass="facebook-login-button"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
