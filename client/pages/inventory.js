import React, { Component } from "react";
import Inventory from "../components/inventory/Inventory";

class inventoryPage extends Component {
  static getInitialProps({ req, query }) {
    let coins;
    if (req) {
      coins = query.query;
    }
    return { coins };
  }
  render() {
    return (
      <div>
        <Inventory coins={this.props.coins} />
      </div>
    );
  }
}
export default inventoryPage;
