import React, { Component } from "react";
import CoinsStyle from "./Coins.scss";
import Coin from "./Coin";
import Proptypes from "prop-types";

class Coins extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataCategories, dataCoins, coinDetail } = this.props;

    let filterCoin = [];
    let dataCoinsClean = [];

    dataCoins.map((coin, index) => {
      coin.category.filter(category => {
        dataCategories.filter(categoryChecked => {
          if (
            categoryChecked.name === category &&
            categoryChecked.checked === true
          ) {
            filterCoin.push(coin);
            filterCoin.filter((coin, index, arra) => {
              arra.map((item, pos) => {
                if (item.id === coin.id && pos !== index) {
                  arra.splice(pos, 1);
                }
                dataCoinsClean = arra;
              });
            });
          }
        });
      });
    });

    const coinsData = dataCoinsClean.map(coin => (
      <Coin coinData={coin} coinDetail={coinDetail} />
    ));

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CoinsStyle }} />{" "}
        <div className="row h-100">{coinsData}</div>
      </>
    );
  }
}

Coins.propTypes = {
  dataCoins: Proptypes.arrayOf(Object).isRequired,
  dataCategories: Proptypes.arrayOf(Object).isRequired,
  coinDetail: Proptypes.func.isRequired
};

export default Coins;
