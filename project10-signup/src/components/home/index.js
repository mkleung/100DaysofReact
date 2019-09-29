import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="row block">
              <div className="col-lg-6 no-padding ">
                <div className="home-image-container" />
              </div>
              <div className="col-lg-6">
                <div className="home-content">
                  <h6 className="home-title">Office Plants App</h6>
                  <p className="home-text">
                    Track your plant watering schedule effortlessly with this
                    new app.
                  </p>
                  <p>
                    <Link className="btn btn-primary" to="/login">
                      Login
                    </Link>
                  </p>
                  <p>
                    <Link className="btn btn-primary" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
