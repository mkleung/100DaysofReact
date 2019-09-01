import React from "react";
import "./ottawamap.scss";
import Skatepark from "./map/skatepark";
import Streetvendors from "./map/streetvendors";
import Beach from "./map/beach";
import Museum from "./map/museums";
import Info from "./info";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import * as parkData from "../data/skateboard-parks.json";
import * as vendorData from "../data/streetvendors.json";
import * as beachData from "../data/beaches.json";
import * as museumData from "../data/museums.json";

class Ottawamap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10
      },
      currentMap: "skatepark"
    };
  }

  selectSkateParks = () => {
    this.setState({
      currentMap: "skatepark"
    });
  };

  selectStreetVendors = () => {
    this.setState({
      currentMap: "streetvendors"
    });
  };

  selectBeaches = () => {
    this.setState({
      currentMap: "beaches"
    });
  };

  selectMuseums = () => {
    this.setState({
      currentMap: "museums"
    });
  };

  _onViewportChange = viewport => {
    this.setState({ viewport });
  };

  render() {
    let currentMap;
    switch (this.state.currentMap) {
      case "skatepark":
        currentMap = <Skatepark parkData={parkData} />;
        break;
      case "streetvendors":
        currentMap = <Streetvendors vendorData={vendorData} />;
        break;
      case "beaches":
        currentMap = <Beach beachData={beachData} />;
        break;
      case "museums":
        currentMap = <Museum museumData={museumData} />;
        break;
      default:
        return null;
    }

    return (
      <div className="container">
        <div className="info">
          <Info
            currentMap={this.state.currentMap}
            selectSkateParks={this.selectSkateParks}
            selectStreetVendors={this.selectStreetVendors}
            selectBeaches={this.selectBeaches}
            selectMuseums={this.selectMuseums}
          />
        </div>

        <div className="map">
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange}
            mapStyle="mapbox://styles/mpakleung/cjzx0hizd0sp21cmjjg6atjso"
            mapboxApiAccessToken="pk.eyJ1IjoibXBha2xldW5nIiwiYSI6ImNqengwNGZtODA0aWczZ3IwdTdwaTVpM2MifQ.yYQmATjtcXfZ8EmVckQa8g"
          >
            <NavigationControl />
            {currentMap}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}
export default Ottawamap;
