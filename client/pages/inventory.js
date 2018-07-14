import React, { Component } from "react";
import Inventory from "../components/inventory/Inventory";
import axios from "axios";

class inventoryPage extends Component {
  static async getInitialProps() {
    let res = await axios("http://localhost:3000/api/all-coins");
    return { coins: res.data };
  }
  render() {
    return (
      <>
        {this.props.coins !== null ? (
          <Inventory dataCoins={this.props.coins} />
        ) : (
          <p>LOADING!</p>
        )}
      </>
    );
  }
}
export default inventoryPage;
