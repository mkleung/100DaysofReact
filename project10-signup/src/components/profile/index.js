import React from "react";
import "./profile.scss";

class Profile extends React.Component {
  logout = () => {
    this.props.history.push(`/login`);
    this.props.logoutUser();
  };
  render() {
    let users = this.props.users;
    const foundUser = users.filter(user => {
      return user.id === this.props.id;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-2 block">
            <div className="profile">
              <h1>Profile {this.props.id}</h1>
              <p>Email: {foundUser[0].email} </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pulvinar dui sed enim pharetra, in semper diam dignissim.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam a mi nec massa
                hendrerit gravida. Nulla elementum libero consectetur, rhoncus
                libero lacinia, porta odio. Integer varius, purus ac congue
                hendrerit, ligula enim tempor leo, sit amet feugiat est sem a
                diam. Suspendisse finibus tellus et libero tempor sagittis. Duis
                condimentum luctus enim, at semper metus luctus quis. Aliquam
                luctus dignissim purus, et mollis ligula tincidunt id.
              </p>
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
export default Profile;
