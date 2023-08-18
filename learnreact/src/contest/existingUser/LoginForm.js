import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate()

  
  if(isLoggedIn)
    navigate("/dashboard");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "newton_school") {
      setErrorMessage("")
      setIsLoggedIn(true);
      return navigate("/dashboard")
    }
    else setErrorMessage('Invalid username or password')
  };

  return (
    <div className="login-div">
      <h1>Login Form</h1>
      <form className="form" onSubmit={handleLogin}>
        <div className="username-div">
          <label className="username-label">Username:</label>
          <input
            className="username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password-div">
          <label className="password-label">Password:</label>
          <input
            className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        {errorMessage.length > 0 ? <p className="error-message">{errorMessage}</p> : ''}
      </form>
    </div>
  );
};

export default LoginForm;
