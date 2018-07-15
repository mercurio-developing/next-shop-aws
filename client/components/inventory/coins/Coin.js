import React, { Component } from "react";
import Proptypes from "prop-types";
import Router from "next/router";

class Coin extends Component {
  showCoinDetail(id) {
    Router.push({
      pathname: `/inventory/${id}`
    });
  }
  render() {
    const { coinData } = this.props;
    return (
      <div
        key={coinData._id}
        className="col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-3"
      >
        >
        <img className="img-fluid coin-image" src={coinData.images[1]} alt="" />
        <p className="m-0 p-1 coin-title">{coinData.name}</p>
        <p className="coin-price">${coinData.price}</p>
        <button
          className="btn btn-md btn-gold"
          onClick={this.showCoinDetail.bind(this, coinData._id)}
        >
          ITEM DETAILS
        </button>
      </div>
    );
  }
}

Coin.protoType = {
  coinData: Proptypes.object.isRequired
};

export default Coin;
