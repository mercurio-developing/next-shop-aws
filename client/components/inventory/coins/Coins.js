import React, { Component } from "react";
import CoinsStyle from "./Coins.scss";
import Coin from "./Coin";
import Proptypes from "prop-types";

class Coins extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.orderByPrice);
    const { dataCategories, dataCoins, orderByPrice } = this.props;
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
                  if (orderByPrice === false) {
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
        <div className="row h-100">{coinsData}</div>
      </>
    );
  }
}

Coins.propTypes = {
  dataCoins: Proptypes.arrayOf(Object).isRequired,
  dataCategories: Proptypes.arrayOf(Object).isRequired,
  orderByPrice: Proptypes.bool.isRequired
};

export default Coins;
