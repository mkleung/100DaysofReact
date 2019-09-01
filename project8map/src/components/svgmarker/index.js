import React from "react";
import "./svgmarker.scss";

class Svgmarker extends React.Component {
  render() {
    return (
      <svg
        className="marker"
        width="25"
        height="25"
        viewBox="0 0 211 302"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="marker__path"
          d="M105.34 302C69.3973 302 -112.565 -5.10691e-06 105.34 0C327.739 5.21221e-06 134.544 302 105.34 302Z"
        />
        <path
          d="M104.5 40L114.94 72.1307H148.724L121.392 91.9886L131.832 124.119L104.5 104.261L77.168 124.119L87.6079 91.9886L60.2759 72.1307H94.0601L104.5 40Z"
          fill="white"
        />
      </svg>
    );
  }
}
export default Svgmarker;
