import React, { Component } from "react";
import CoinDetail from "../components/inventory/coins/CoinDetail";
class inventoryPage extends Component {
  static async getInitialProps({ req, query }) {
    let coin;
    if (req) {
      coin = query.query;
    }
    return { coin };
  }
  render() {
    return (
      <div>
        <CoinDetail coinDetailData={this.props.coin} />
      </div>
    );
  }
}
export default inventoryPage;
