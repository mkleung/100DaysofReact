import React, { Component } from "react";
import Card from "../card";
import { CSSTransition } from "react-transition-group";
import data from "../../data/data";
import "./listings.scss";

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    };
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { property } = this.state;
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="buttons text-center">
                <button
                  className="left"
                  onClick={() => this.prevProperty()}
                  disabled={property.index === 0}
                >
                  Prev
                </button>
                <button
                  className="right"
                  onClick={() => this.nextProperty()}
                  disabled={property.index === data.properties.length - 1}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="card-wrapper">
                <CSSTransition
                  in={this.state.appearHome}
                  appear={true}
                  timeout={300}
                  classNames="fade"
                >
                  <Card property={property} />
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className="page">
      //   <div className="buttons">
      //     <button
      //       className="left"
      //       onClick={() => this.prevProperty()}
      //       disabled={property.index === 0}
      //     >
      //       Prev
      //     </button>
      //     <button
      //       className="right"
      //       onClick={() => this.nextProperty()}
      //       disabled={property.index === data.properties.length - 1}
      //     >
      //       Next
      //     </button>
      //   </div>
      //   <div className="home-wrapper">
      //     <CSSTransition
      //       in={this.state.appearHome}
      //       appear={true}
      //       timeout={300}
      //       classNames="fade"
      //     >
      //       <Card property={property} />
      //     </CSSTransition>
      //   </div>
      // </div>
    );
  }
}

export default Listings;
