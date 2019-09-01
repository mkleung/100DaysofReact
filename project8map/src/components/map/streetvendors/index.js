import React from "react";
import { Popup, Marker } from "react-map-gl";
import Svgmarker from "../../svgmarker";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVendor: null,
      latitude: null,
      longitude: null
    };
  }

  selectMarker = (vendor, latitude, longitude) => {
    this.setState({
      selectedVendor: vendor,
      latitude: latitude,
      longitude: longitude
    });
  };

  closeMarker = () => {
    this.setState({
      selectedVendor: null,
      latitude: null,
      longitude: null
    });
  };

  render() {
    let selectedVendor = this.state.selectedVendor;
    let vendorData = this.props.vendorData;

    let items = [];
    for (let i = 0; i < 48; i++) {
      let item = vendorData[i];

      let coordinates = item["X, Y Coordinates"];
      let latitude = parseFloat(coordinates.split(",")[0]);
      let longitude = parseFloat(coordinates.split(",")[1]);
      items.push(
        <Marker key={i} latitude={latitude} longitude={longitude}>
          <button
            className="parkButton"
            onClick={() => this.selectMarker(item, latitude, longitude)}
          >
            <Svgmarker />
          </button>
        </Marker>
      );
    }

    let googlelink = `http://maps.google.com/maps?q=${this.state.latitude},${
      this.state.longitude
    }`;
    return (
      <React.Fragment>
        {items}

        {selectedVendor ? (
          <Popup
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          >
            <button
              className="closeMarker"
              onClick={() => {
                this.closeMarker();
              }}
            >
              X
            </button>
            <h3>{selectedVendor["Trade Name"]}</h3>

            {/* concept */}
            {selectedVendor["Concept"] === "" ? null : (
              <p>Concept: {selectedVendor["Concept"]}</p>
            )}

            {/* Location */}
            {selectedVendor["Location"] === "" ? null : (
              <p>Location: {selectedVendor["Location"]}</p>
            )}

            {/* Google map */}
            {googlelink === "" ? null : (
              <div className="link">
                <a className="button" target="_blank" href={googlelink}>
                  Google Link
                </a>
              </div>
            )}
          </Popup>
        ) : null}
      </React.Fragment>
    );
  }
}
export default Map;
