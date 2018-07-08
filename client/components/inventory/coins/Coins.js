import React, { Component } from "react";
import CoinsStyle from "./Coins.scss";
import Proptypes from "prop-types";
class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilter: []
    };
  }

  render() {
    const { dataCategories, dataCoins } = this.props;
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
            console.log(dataCoins.lenght, index + 1);
            console.log(filterCoin);
          }
        });
      });
    });

    filterCoin.filter((coin, index, arra) => {
      arra.map((item, pos) => {
        if (item.id === coin.id && pos !== index) {
          arra.splice(pos, 1);
        }
        dataCoinsClean = arra;
        console.log(dataCoinsClean);
      });
    });

    // if (filterCoin.length === index + 1) {
    //   filterCoin.filter((coin, index, arra) => {
    //     arra.map((item, pos) => {
    //       if (item.id === coin.id && pos !== index) {
    //         arra.splice(pos, 1);
    //       }
    //       dataCoinsClean = arra;
    //       console.log(dataCoinsClean);
    //     });
    //   });
    // }
    const coinsData = dataCoinsClean.map(coin => (
      <div
        key={coin.id}
        className="col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-5"
      >
        <img className="img-fluid " src={coin.images[1]} alt="" />
        <p className="mt-2 coin-title">{coin.name}</p>
        <p className="coin-price">{coin.price}</p>
        <button className="btn btn-md btn-gold ">ITEM DETAILS</button>
      </div>
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
  dataCategories: Proptypes.arrayOf(Object).isRequired
};

export default Coins;
