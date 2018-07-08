import React from "react";
import Link from "next/link";

export default () => {
  return (
    <>
      <div className="row footer-row fixed-bottom">
        <div className="col-lg-10 col-xl-10 mx-auto my-auto">
          <ul class="nav pt-1">
            <li class="nav-item nav-footer">
              <Link href="/about">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li class="nav-item nav-footer">
              <Link href="/contact">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item nav-footer">
              <Link href="/privacy">
                <a className="nav-link">Privacy</a>
              </Link>
            </li>
            <li className="nav-item pt-1 ml-auto">
              <span className="copy">(c) 2018 Liberty Coin Investments</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
