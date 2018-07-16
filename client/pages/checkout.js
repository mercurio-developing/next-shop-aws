import React, { Component } from "react";
import Checkout from "../components/checkout/Checkout";
import axios from "axios";
class checkoutPage extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      return { coinsData: req.session.cart };
    }
    let res = await axios.get("http://localhost:3000/api/coinsInCart");
    return { coinsData: res.data };
  }

  render() {
    const { coinsData } = this.props;
    console.log(this.props.coinsData);
    return (
      <>
        <Checkout coinsCartData={coinsData} />
      </>
    );
  }
}

export default checkoutPage;
