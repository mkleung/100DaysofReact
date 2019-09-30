import React, { Component } from "react";
import Card from "../card";
import { CSSTransition } from "react-transition-group";
import data from "../../data/data";
import "./home.scss";

class Home extends Component {
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
        <div className="buttons">
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
        <div className="home-wrapper">
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
    );
  }
}

export default Home;
