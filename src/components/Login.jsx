import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to authentication API endpoint
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        const token = responseData.token; //Get the token
        setUsername('');
        setPassword('');
        setErrorMessage('');

        // Fetch the user's profile data using the token
        const userProfileResponse = await fetch('https://fakestoreapi.com/users/2', {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        const userProfileData = await userProfileResponse.json(); //convert response into JS objects

        // Combining token and user profile data into 1 object
        const userData = { token, ...userProfileData };

        // Update user data in App component
        setUser(userData);


        // Redirect to the home page
        navigate('/');
      } else {
        // Authentication failed message
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred while logging in.');
    }
  }

  return (
    //login form
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
         <input
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          id="usernamel"
          name="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}


