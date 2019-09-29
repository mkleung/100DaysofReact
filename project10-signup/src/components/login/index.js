import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "test@test.com",
      password: "",
      showPassword: false
    };
  }

  showPassword = event => {
    event.preventDefault();
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    let users = this.props.users;
    const foundUser = users.filter(user => {
      return user.email === email;
    });
    if (password === foundUser[0].password) {
      if (this.props.page === "profile") {
        this.props.history.push(`/profile`);
      } else if (this.props.page === "admin") {
        this.props.history.push(`/admin`);
      } else {
        this.props.history.push(`/`);
      }

      this.props.loginUser(foundUser[0].id);
    } else {
      alert("invalid Email/password");
    }
  };

  render() {
    let passwordType = this.state.showPassword ? "text" : "password";
    let passwordClass = this.state.showPassword ? "eye green" : "eye";
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 block">
            <form
              onSubmit={this.handleSubmit}
              className="p-5 loginForm text-center"
            >
              <div className="form-group">
                <img className="loginImg" src="plant2.png" alt="plant" />
                <h1>Login</h1>
                <input
                  required
                  id="email"
                  type="email"
                  className="form-control loginInput loginEmail"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </div>

              <div className="form-group password">
                <input
                  required
                  type={passwordType}
                  className="form-control loginInput loginPassword"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
                <button className={passwordClass} onClick={this.showPassword} />
              </div>

              <input type="submit" className="btn btn-primary" value="Submit" />

              <div className="sign">
                Don't have an account? <Link to="/register">Sign In</Link>
              </div>
            </form>

            <div />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
