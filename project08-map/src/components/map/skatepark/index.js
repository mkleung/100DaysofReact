import React from "react";
import { Popup, Marker } from "react-map-gl";
import Svgmarker from "../../svgmarker";

class Skatepark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPark: null
    };
  }

  selectMarker = marker => {
    this.setState({
      selectedPark: marker
    });
  };

  closeMarker = () => {
    this.setState({
      selectedPark: null
    });
  };

  render() {
    let parkData = this.props.parkData;
    let selectedPark = this.state.selectedPark;
    let googlelink =
      selectedPark === null
        ? ""
        : `http://maps.google.com/maps?q=${
            selectedPark.geometry.coordinates[1]
          },${selectedPark.geometry.coordinates[0]}`;
    console.log(selectedPark);
    return (
      <React.Fragment>
        {parkData.features.map(park => (
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

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
          >
            <button
              className="closeMarker"
              onClick={() => {
                this.closeMarker();
              }}
            >
              X
            </button>
            <h3>{selectedPark.properties.NAME}</h3>
            <p>{selectedPark.properties.ADDRESS}</p>

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
