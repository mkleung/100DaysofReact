import React from "react";
import { Popup, Marker } from "react-map-gl";
import Svgmarker from "../../svgmarker";

class Skatepark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeach: null,
      latitude: null,
      longitude: null
    };
  }

  selectMarker = marker => {
    this.setState({
      selectedBeach: marker
    });
  };

  closeMarker = () => {
    this.setState({
      selectedBeach: null,
      latitude: null,
      longitude: null
    });
  };

  render() {
    let beachData = this.props.beachData;
    let selectedBeach = this.state.selectedBeach;
    let googlelink =
      selectedBeach === null
        ? ""
        : `http://maps.google.com/maps?q=${
            selectedBeach.geometry.coordinates[1]
          },${selectedBeach.geometry.coordinates[0]}`;
    return (
      <React.Fragment>
        {beachData.features.map(beach => (
          <Marker
            key={beach.properties.FACILITYID}
            latitude={beach.geometry.coordinates[1]}
            longitude={beach.geometry.coordinates[0]}
          >
            <button
              className="parkButton"
              onClick={() => this.selectMarker(beach)}
            >
              <Svgmarker />
            </button>
          </Marker>
        ))}

        {selectedBeach ? (
          <Popup
            latitude={selectedBeach.geometry.coordinates[1]}
            longitude={selectedBeach.geometry.coordinates[0]}
          >
            <button
              className="closeMarker"
              onClick={() => {
                this.closeMarker();
              }}
            >
              X
            </button>
            <h3>{selectedBeach.properties.NAME}</h3>
            <p>{selectedBeach.properties.ADDRESS}</p>

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
export default Skatepark;
