import React, { Component } from "react";
import Cart from "../components/cart/Cart";
import axios from "axios";
class cartPage extends Component {
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
        <Cart coinsCartData={coinsData} />
      </>
    );
  }
}

export default cartPage;
