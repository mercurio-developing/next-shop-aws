import React, { Component } from "react";
import Proptypes from "prop-types";

class CoinDetail extends Component {
  render() {
    const { coinDetailData } = this.props;
    console.log(coinDetailData);
    return (
      <div>
        <p>ROCK ON</p>
      </div>
    );
  }
}

CoinDetail.protoType = {
  coinDetailData: Proptypes.object.isRequired
};

export default CoinDetail;
