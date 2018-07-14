import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Proptypes from "prop-types";
import CartStyle from "./Cart.scss";

class CoinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const deleteCoin = this.deleteCoin.bind(this);
  }

  deleteCoin(id) {
    axios.post("/delete-coin", { id: id });
    Router.reload("/cart");
  }
  render() {
    const { coinsCartData } = this.props;
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CartStyle }} />
        <div className="row p-4">
          <div className="col-xl-10 col-lg-10 mx-auto">
            <div className="row ">
              <button
                className="btn btn-primary btn-md"
                onClick={() => Router.push("/inventory")}
              >
                <i className="fas fa-arrow-left pr-2" />
                Back to Inventory
              </button>
            </div>
            <div className="row cart-row mt-5 mb-5">
              <div className="col-xl-12 col-lg-12">
                <div className="row h-100">
                  <div className="col-xl-8 col-lg-8 items-row p-4">
                    <label className="label-header">SHOPPING CART</label>
                    {coinsCartData.map((coin, index) => (
                      <div
                        key={index}
                        className="row cart-items pt-4 pb-4 mt-2"
                      >
                        <div className="col-xl-3 col-lg-3">
                          <img
                            className="cart-img"
                            src={coin.images[0]}
                            alt=""
                          />
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
                              {coin.price}{" "}
                              <i
                                className="far fa-trash-alt pl-2"
                                onClick={() => this.deleteCoin(coin._id)}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}{" "}
                  </div>
                  <div className="col-xl-4 div lg-4 p-4">
                    <div className="row h-50">
                      <div className="col-xl-12 col-lg-12">
                        <div className="row h-75 order-row">
                          <label className="label-header">YOUR ORDER</label>
                          <div className="col-xl-10 col-lg-10 mx-auto mt-5">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right">
                                SUBTOTAL
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right order-price">
                                $10,900
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-10 mx-auto">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right">
                                SHIPPING
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right pt-1 order-shipping">
                                FREE
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-10 mx-auto">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right ">
                                TOTAL
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right order-price">
                                $10,900
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 mx-auto mt-5">
                      <button className="btn btn-md btn-gold">CHECKOUT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

CoinDetail.protoType = {
  coinsCartData: Proptypes.object.isRequired
};

export default CoinDetail;
