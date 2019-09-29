import React from "react";
import "./admin.scss";

class Admin extends React.Component {
  logout = () => {
    this.props.history.push(`/login`);
    this.props.logoutUser();
  };
  render() {
    let users = this.props.users;
    const displayUsers = users.map(user => {
      return <li key={user.id}>{user.email}</li>;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-2 block">
            <div className="admin">
              <h1>Admin</h1>
              <ul>{displayUsers}</ul>
              <button className="btn btn-primary" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
