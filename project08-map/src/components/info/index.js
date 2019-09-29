import React from "react";
import "./info.scss";

class Info extends React.Component {
  render() {
    let current = this.props.currentMap;
    let activeSkatepark = "button ";
    let activeStreetvendor = "button ";
    let activeBeaches = "button ";
    let activeMuseum = "button ";
    switch (current) {
      case "skatepark":
        activeSkatepark += "active";
        break;
      case "streetvendors":
        activeStreetvendor += "active";
        break;
      case "beaches":
        activeBeaches += "active";
        break;
      case "museums":
        activeMuseum += "active";
        break;
      default:
        break;
    }
    return (
      <React.Fragment>
        <h1>Ottawa Open Data</h1>
        <p>Click on the links below to view data</p>
        <p>
          <button
            className={activeSkatepark}
            onClick={() => {
              this.props.selectSkateParks();
            }}
          >
            Skateparks
          </button>
        </p>
        <p>
          <button
            className={activeStreetvendor}
            onClick={() => {
              this.props.selectStreetVendors();
            }}
          >
            Street Vendors
          </button>
        </p>
        <p>
          <button
            className={activeBeaches}
            onClick={() => {
              this.props.selectBeaches();
            }}
          >
            Beaches
          </button>
        </p>

        <p>
          <button
            className={activeMuseum}
            onClick={() => {
              this.props.selectMuseums();
            }}
          >
            Museums
          </button>
        </p>
      </React.Fragment>
    );
  }
}
export default Info;
