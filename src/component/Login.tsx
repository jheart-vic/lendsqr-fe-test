import loginImg from "../assets/loginImg.svg"
import "./Login.css"
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-body">
        <div className="login-body-image">
          <img src={loginImg} alt="login-svg" id="login-svg"/>
        </div>
        <div className="login-body-form">
          <div className="login-body-form-header">
            <h1>Welcome</h1>
            <small>Enter details to login</small>
          </div>
          <form action="">
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="password" name="password" id="password" placeholder="Password"  />
              <a href="#forgot-password" id="forgot-password"><small>Forgot password?</small></a>
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
