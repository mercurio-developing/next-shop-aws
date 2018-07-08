import React, { Component } from "react";
import HomeStyle from "./Home.scss";
class Home extends Component {
  render() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: HomeStyle }} />{" "}
        <div className="row h-100">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12 p-0">
            <div className="row hero-image ">
              <div className="container p-0">
                <div className="row h-100">
                  <div className="col-xl-6 col-md-6 col-sm-6 col-6 my-auto">
                    <p class="m-0 hero-title mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus accumsan id neque vitae laoreet.
                    </p>
                    <button class="btn btn-gold text-center float-right">
                      SEE INVENTORY
                    </button>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-6 col-6 my-auto p-5 text-center">
                    <img
                      class="img-fluid mx-auto main-banner"
                      src="/static/assets/main_banner.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-3 h-50">
              <div className="col-xl-3 div-lg-3  m-2 p-5 category-card text-center">
                <img class="img-fluid" src="/static/assets/coin_5.png" alt="" />
                <h4 class="p-3 card-title">FEATURED COINS</h4>{" "}
              </div>
              <div className="col-xl-3 div-lg-3  m-2 p-5 category-card text-center">
                <img class="img-fluid" src="/static/assets/coin_5.png" alt="" />
                <h4 class="p-3 card-title">FEATURED COINS</h4>{" "}
              </div>
              <div className="col-xl-3 div-lg-3  m-2 p-5 category-card text-center">
                <img class="img-fluid" src="/static/assets/coin_5.png" alt="" />
                <h4 class="p-3 card-title">FEATURED COINS</h4>{" "}
              </div>
              <div className="category-card  text-center mx-auto p-5  ">
                <img
                  class="img-fluid pt-3"
                  src="/static/assets/main_gurantee.png"
                  alt=""
                />
                <h4 class="card-customer mt-4">
                  100% Customers Satisfaction Guarantee
                </h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
