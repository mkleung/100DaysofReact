import React from "react";
import { Popup, Marker } from "react-map-gl";
import Svgmarker from "../../svgmarker";

class Museum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMuseum: null
    };
  }

  selectMarker = marker => {
    this.setState({
      selectedMuseum: marker
    });
  };

  closeMarker = () => {
    this.setState({
      selectedMuseum: null
    });
  };

  render() {
    let museumData = this.props.museumData;
    let selectedMuseum = this.state.selectedMuseum;
    let googlelink =
      selectedMuseum === null
        ? ""
        : `http://maps.google.com/maps?q=${
            selectedMuseum.geometry.coordinates[1]
          },${selectedMuseum.geometry.coordinates[0]}`;

    return (
      <React.Fragment>
        test
        {museumData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="parkButton"
              onClick={() => this.selectMarker(park)}
            >
              <Svgmarker />
            </button>
          </Marker>
        ))}
        {selectedMuseum ? (
          <Popup
            latitude={selectedMuseum.geometry.coordinates[1]}
            longitude={selectedMuseum.geometry.coordinates[0]}
          >
            <button
              className="closeMarker"
              onClick={() => {
                this.closeMarker();
              }}
            >
              X
            </button>
            <h3>{selectedMuseum.properties.NAME}</h3>
            <p>{selectedMuseum.properties.ADDRESS}</p>

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
export default Museum;
