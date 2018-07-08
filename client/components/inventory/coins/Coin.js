import React, { Component } from "react";
import Proptypes from "prop-types";

class Coin extends Component {
  render() {
    const { coinData, coinDetail } = this.props;
    return (
      <div
        key={coinData.id}
        className="col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-5"
      >
        <img className="img-fluid " src={coinData.images[1]} alt="" />
        <p className="mt-2 coin-title">{coinData.name}</p>
        <p className="coin-price">{coinData.price}</p>
        <button
          className="btn btn-md btn-gold"
          onClick={() => {
            coinDetail(coinData.id);
          }}
        >
          ITEM DETAILS
        </button>
      </div>
    );
  }
}

Coin.protoType = {
  coinData: Proptypes.object.isRequired,
  coinDetail: Proptypes.func.isRequired
};

export default Coin;
