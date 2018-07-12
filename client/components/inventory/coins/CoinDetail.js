import React, { Component } from "react";
import Proptypes from "prop-types";
import PinchZoom from "../pinchZoom/PinchZoom.js";
import CoinStyle from "./Coins.scss";

class CoinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSelect: "/static/assets/coin_5.png"
    };
  }

  changeImg() {
    ///ADD INDEX and MAP THE IMAGES
    let imgSelect = "/static/assets/coin_3.png";
    // this.setState({ imgSelect: coinDetailData.images[index] });
    this.setState({ imgSelect: "/static/assets/coin_3.png" });
  }
  render() {
    const { coinDetailData } = this.props;
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CoinStyle }} />
        <div className="row h-100 p-4">
          <div className="col-xl-12 col-lg-12">
            <div className="row ">
              <button className="btn btn-primary btn-md">
                <i class="fas fa-arrow-left pr-2" />
                Back to Inventory
              </button>
            </div>
            <div className="row h-100 mt-5">
              <div className="col-xl-7 col-lg-8 p-0">
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
                  <div className="col-xl-8 col-lg-8 mx-auto">
                    <div className="row">
                      <div className="col-lg-4 col-xl-4">
                        <img
                          className="img-thumbnail"
                          src="/static/assets/coin_2.png"
                          alt=""
                          onClick={this.changeImg.bind(this)}
                        />
                      </div>
                      <div className="col-lg-4 col-xl-4">
                        <img
                          className="img-thumbnail"
                          src="/static/assets/coin_4.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-xl-4">
                        <img
                          className="img-thumbnail"
                          src="/static/assets/coin_5.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4">
                <div className="row row-card">
                  <div className="col-xl-12 col-lg-12 text-left">
                    <h4>{coinDetailData.name}</h4>
                    <p>{coinDetailData.description}</p>
                    <span>{coinDetailData.map(cat => <p>cat</p>)}</span>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <p>{coinDetailData.price}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <button className="btn btn-gold">ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-4  mx-auto">
                <div className="row row-card p-3">
                  <div className="col-xl-12 col-lg-12 text-left">
                    <h3 class="coin-detail-title mt-4">
                      1794 Flowing Hair Dollar
                    </h3>
                    <p class="coin-detail-description mt-3">
                      An interesting coin with a bit of red peeking out from the
                      middle of the cent, with more browns and greens near the
                      rim. Most likely from the famous Randall Hoard, with the
                      die crack that the hoard coins almost all have. Feel free
                      to research the hoard, as it is quite a story. An
                      interesting coin with a bit of red peeking out from the
                      middle of the cent, with more browns and greens near the
                      rim. Most likely from the famous Randall Hoard, with the
                      die crack that the hoard coins almost all have. Feel free
                      to research the hoard, as it is quite a story.
                    </p>
                    <span class="coin-detail-categories">
                      Population: PCGS 63 in MS 62 RB, 210 higher.
                      Certification#: 81765388
                    </span>
                    <div className="row mt-5">
                      <div className="col-xl-6 col-lg-6">
                        <p class="coin-detail-price">$4.500</p>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <button className="btn btn-gold">ADD TO CART</button>
                      </div>
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
