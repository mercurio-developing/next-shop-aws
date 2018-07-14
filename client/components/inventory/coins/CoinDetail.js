import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";

import Proptypes from "prop-types";
import PinchZoom from "../pinchZoom/PinchZoom.js";
import CoinStyle from "./Coins.scss";

class CoinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSelect: this.props.coinDetailData.images[0],
      validationCart: { status: "", data: "" }
    };
    this.addCoinToCart = this.addCoinToCart.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.comeBack = this.comeBack.bind(this);
  }

  changeImg(index) {
    let imgSelect = this.props.coinDetailData.images[index];
    this.setState({ imgSelect });
  }

  comeBack() {
    Router.push({
      pathname: "/inventory"
    });
  }

  addCoinToCart() {
    let coin = this.props.coinDetailData;
    axios
      .post("/addToCart", coin)
      .then(res => {
        console.log(res);
        this.setState({
          validationCart: {
            status: res.status,
            data: res.data
          }
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          validationCart: {
            status: err.response.status,
            data: err.response.data.err
          }
        });
      });
  }
  render() {
    const { coinDetailData } = this.props;
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CoinStyle }} />
        <div className="row h-100 p-4">
          <div className="col-xl-10 mx-auto col-lg-10 mx-auto">
            <div className="row ">
              <button
                className="btn btn-primary btn-md"
                onClick={this.comeBack}
              >
                <i className="fas fa-arrow-left pr-2" />
                Back to Inventory
              </button>
            </div>
            <div className="row h-100 mt-xl-4 mt-lg-4">
              <div className="col-xl-6 col-lg-8 p-0">
                <div className="row text-center  h-75">
                  <PinchZoom initialScale="0" minScale="1" maxScale="10">
                    <img
                      className="img-pinch"
                      src={this.state.imgSelect}
                      alt=""
                    />
                  </PinchZoom>
                </div>
                <div className="row mt-3">
                  <div className="col-xl-5 col-lg-5 mx-auto">
                    <div className="row">
                      {coinDetailData.images.map((img, index) => (
                        <div key={index} className="col-lg-6 col-xl-6">
                          <img
                            className="img-thumbnail"
                            src={img}
                            alt=""
                            onClick={() => {
                              this.changeImg(index);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4  mx-auto">
                <div className="row row-card p-3">
                  <div className="col-xl-12 col-lg-12 text-left">
                    <h3 className="coin-detail-title mt-4">
                      {coinDetailData.name}{" "}
                    </h3>
                    <p className="coin-detail-description mt-3">
                      {coinDetailData.description}
                    </p>
                    <p className="coin-detail-categories">
                      {coinDetailData.categories.map((coin, index) => (
                        <span key={index}>
                          {"  "}
                          {coin}
                        </span>
                      ))}
                    </p>
                    <div className="row mt-5">
                      <div className="col-xl-6 col-lg-6">
                        <p className="coin-detail-price">
                          {coinDetailData.price}
                        </p>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <button
                          onClick={this.addCoinToCart}
                          className="btn btn-gold"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      {this.state.validationCart.status === 401 ? (
                        <p className="validation-error ml-auto pr-4">
                          {this.state.validationCart.data}
                        </p>
                      ) : (
                        <p className="validation-success ml-auto pr-4">
                          {this.state.validationCart.data}
                        </p>
                      )}
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
  coinDetailData: Proptypes.object.isRequired
};

export default CoinDetail;
