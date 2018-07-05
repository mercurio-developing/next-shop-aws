import React from "react";

export default () => {
  return (
    <>
      <div className="row navbar-row">
        <div className="col-lg-10 col-xl-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src="/static/assets/logo.png" className="logo mb-2" alt="" />{" "}
              <span> LIBERTY COIN INVESTMENTS</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link active" href="#">
                  HOME
                </a>
                <a className="nav-item nav-link" href="#">
                  ABOUT
                </a>
                <a className="nav-item nav-link" href="#">
                  CONTACT
                </a>
                <a className="nav-item nav-link" href="#">
                  INVENTORY
                </a>
              </div>
              <a className="nav-item nav-link" href="#">
                <img src="/static/assets/cart.png" alt="" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
