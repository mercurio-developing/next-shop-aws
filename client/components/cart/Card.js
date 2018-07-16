import React, { Component } from "react";
import Proptypes from "prop-types";
class Card extends Component {
  render() {
    const { coinsCartData, deleteCoin } = this.props;
    return (
      <>
        {coinsCartData.map((coin, index) => (
          <div key={index} className="row cart-items pt-4 pb-4 mt-2">
            <div className="col-xl-3 col-lg-3">
              <img className="cart-img" src={coin.images[0]} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 ">
              <div className="row">
                <div className="col-xl-12 col-lg-12 my-auto " />
                <label className="pl-3">PRODUCT</label>
              </div>
              <div className="row h-50">
                <div className="col-xl-12 col-lg-12 my-auto">
                  <p className="coin-name">{coin.name}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="row">
                <div className="col-xl-12 col-lg-12 p-0">
                  <label>TOTAL</label>
                </div>
              </div>
              <div className="row h-50">
                <div className="col-xl-12 col-lg-12" />
                <p className="coin-price">
                  ${coin.price}{" "}
                  <i
                    className="far fa-trash-alt pl-5"
                    onClick={() => deleteCoin(coin._id)}
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

Card.propTypes = {
  coinsCartData: Proptypes.arrayOf(Object).isRequired,
  deleteCoin: Proptypes.func.isRequired
};
export default Card;
