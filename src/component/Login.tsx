import React from "react";
import Group from "../assets/Group.svg";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-body">
        <div className="login-body-image-wrapper">
          <div className="login-body-logo">
            <img src={Group} alt="logo" id="logo-svg" />
          </div>
        </div>
        <div className="login-body-details">
          <div className="login-body-details-header">
            <h1>Welcome!</h1>
            <small>Enter details to login</small>
          </div>
          <div className="login-body-details-form">
            <form action="" className="form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <a href="#forgot-password" id="forgot-password">
                  <small>Forgot password?</small>
                </a>
                <button type="submit">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
