import React, { Component } from "react";
import "./coin.css";

class Coin extends Component {
  static defaultProps = {
    side: "head"
  };
  render() {
    const headUrl =
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg";
    const tailUrl =
      "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=8ee7594249420f2f4223d2c286550ffa3463a085-1578822804-0-AXCq8Z2CWtgmw879cMT-yK9PiGouGgKP2S6NUYZlo6dnKyPIxBIqO3V52DC5HbWHHqrddS-yALhHhHJr-VUYh2NfrF_4Kp4KWDWEV0nXDOFW2XsYk45Sr3cN3djeWor-POoLWMFZoVpW8mPbmp9b4Hjl3Dy8xmGLDXOCKSMR-J7ZW2ECAPVzE4YQGArnAcN7IzBY93vgn1_Yd_EAAmjXx9qbKJAb1AIA7SSoQfm4C-N3aNH3IHK-b53kbIXvboS9IjR2CDRIVbmScGCzmCOEBF1Y73DC0uQEuQG_tHSU_7UM";
    return (
      <img
        className="coin"
        src={this.props.side === "head" ? headUrl : tailUrl}
        alt={this.props.side}
      />
    );
  }
}

export default Coin;
