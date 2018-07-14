import React from "react";
import Link from "next/link";

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
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-auto">
                <Link href="/">
                  <a className="nav-item nav-link active">HOME</a>
                </Link>
                <Link href="/about">
                  <a className="nav-item nav-link active">ABOUT</a>
                </Link>
                <Link href="/contact">
                  <a className="nav-item nav-link active">CONTACT</a>
                </Link>
                <Link href="/inventory" prefetch>
                  <a className="nav-item nav-link active">INVENTORY</a>
                </Link>
                <Link href="/cart" prefetch>
                  <a className="nav-item nav-link">
                    <img src="/static/assets/cart.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
