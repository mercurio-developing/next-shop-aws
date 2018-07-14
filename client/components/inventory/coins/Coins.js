import React, { Component } from "react";
import Proptypes from "prop-types";

import CoinsStyle from "./Coins.scss";
import Coin from "./Coin";

class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderByPrice: true
    };
    const sortByPrice = this.sortByPrice.bind(this);
  }
  sortByPrice() {
    console.log(this.setState.orderByPrice);
    this.setState({ orderByPrice: !this.state.orderByPrice });
  }
  render() {
    console.log(this.state.orderByPrice);
    const { dataCategories, dataCoins } = this.props;
    let filterCoin = [];
    let dataCoinsClean = [];
    dataCoins.map((coin, index) => {
      coin.categories.filter(category => {
        dataCategories.filter(categoryChecked => {
          if (
            categoryChecked.name === category &&
            categoryChecked.checked === true
          ) {
            filterCoin.push(coin);
            filterCoin.filter((coin, index, arra) => {
              arra.map((item, pos) => {
                if (item._id === coin._id && pos !== index) {
                  arra.splice(pos, 1);
                }
                dataCoinsClean = arra;
                if (filterCoin.length === index + 1) {
                  if (this.state.orderByPrice === false) {
                    dataCoinsClean.sort((a, b) => {
                      Number(a.price) - Number(b.price);
                    });
                  } else {
                    dataCoinsClean.sort(
                      (a, b) => Number(a.price) - Number(b.price)
                    );
                  }
                }
              });
            });
          }
        });
      });
    });

    const coinsData = dataCoinsClean.map(coin => (
      <Coin key={coin._id} coinData={coin} />
    ));

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CoinsStyle }} />{" "}
        <div className="col-xl-11 col-lg-11 mr-auto">
          <div className="row">
            <div className="col-xl-2 col-lg-2 ml-auto text-right">
              <form className="form-inline">
                <div className="form-group">
                  <label>SORT BY:</label>
                  <select
                    className="form-control pl-2 ml-2"
                    onClick={() => {
                      this.sortByPrice();
                    }}
                  >
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="row h-100">{coinsData}</div>
          </div>
        </div>
      </>
    );
  }
}

Coins.propTypes = {
  dataCoins: Proptypes.arrayOf(Object).isRequired,
  dataCategories: Proptypes.arrayOf(Object).isRequired
};

export default Coins;
