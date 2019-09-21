import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      users: JSON.stringify(this.props.users)
    };
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();

    this.props.addUser(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 block">
            <form
              onSubmit={this.handleSubmit}
              className="p-5 loginForm text-center"
            >
              <div className="form-group">
                <img className="loginImg" src="plant3.png" alt="plant" />
                <h1>Register</h1>
                <input
                  required
                  id="email"
                  type="email"
                  className="form-control "
                  placeholder="Enter new email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </div>

              <div className="form-group password">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter new Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </div>

              <input type="submit" className="btn btn-primary" value="Submit" />

              <div className="sign">
                Already have an account? <Link to="/login">Login In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
