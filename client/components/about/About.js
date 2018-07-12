import React, { Component } from "react";
import AboutStyle from "./About.scss";

class About extends Component {
  render() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: AboutStyle }} />{" "}
        <div className="row h-100">
          <div className="container p-0">
            <div className="row mt-sm-0 mt-md-5">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-md-5">
                <div className="row card-about">
                  <div className="col-xl-6 col-md-6 col-sm-6 col-6 p-0 my-auto">
                    <img
                      class="img-fluid mx-auto"
                      src="/static/assets/about_img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-6 col-6 p-5 my-auto p-0 text-left">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-sm-12 col-12 card-description">
                        <p className="subheader ">
                          ABOUT LIBERTY COIN INVESTMENTS
                        </p>
                        <h3>Excepteur sint occaceuiecat.</h3>
                        <p className="m-0 about-text">
                          Culpa qui officia deserunt mollit anim id est laborum.
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptartem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi ropeior architecto beatae vitae
                          dicta sunt explicabo...
                        </p>
                        <div className="row mt-5">
                          <div className="col-xl-1 col-lg-1 pt-1">
                            <i class="fas fa-user-circle" />
                          </div>
                          <div className="col-xl-11 col-lg-11 owner">
                            <p className="m-0">NATHAN WINTERFIELD</p>
                            <p className="m-0">Founder & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row h-25 mt-md-5 mt-lg-3">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 my-auto mx-auto">
                <div className="row">
                  <div className="col-xl-4 div-lg-4 col-md-4 category-card text-center mx-auto">
                    <img
                      class="img-bbb img-fluid my-auto"
                      src="/static/assets/about_bbb.png"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-4 div-lg-4 col-md-4 category-card  text-center mx-auto">
                    <img
                      class="img-pccs img-fluid my-auto"
                      src="/static/assets/about_pccs.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="col-xl-4 div-lg-4 col-md-4 category-card text-center mx-auto">
                    <img
                      class="img-ngc img-fluid my-auto"
                      src="/static/assets/about_ngc.png"
                      alt=""
                    />
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
export default About;
