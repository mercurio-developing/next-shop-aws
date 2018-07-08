import React, { Component } from "react";
import InventoryStyle from "./Inventory.scss";
// Mocks
import categories from "./mocks/categories";
import coins from "./mocks/data";
//Components
import CategoryList from "./CategoryList";
import Coins from "./coins/Coins";
import CoinDetail from "./coins/CoinDetail";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      allCategories: false,
      coins,
      coinDetailData: {},
      showDetail: false
    };
    this.checkCategory = this.checkCategory.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.showCoinDetail = this.showCoinDetail.bind(this);
  }

  checkCategory(id) {
    let categories = this.state.categories;
    categories[id].checked = !categories[id].checked;
    this.setState({ categories });
  }
  checkAll() {
    let categories = this.state.categories;
    let checked = !this.state.allCategories;
    categories.map(category => (category.checked = checked));
    this.setState({ categories, allCategories: checked });
  }

  showCoinDetail(id) {
    let coinDetailData = this.state.coins.filter(coin => coin.id === id);
    let showDetail = !this.state.showDetail;
    this.setState({ showDetail, coinDetailData });
  }

  render() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: InventoryStyle }} />{" "}
        <div className="row h-100">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list">
            <CategoryList
              dataCategories={this.state.categories}
              checkCategory={this.checkCategory}
              checkAll={this.checkAll}
              allCategories={this.state.allCategories}
            />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5">
            {this.state.showDetail === false ? (
              <Coins
                dataCategories={this.state.categories}
                dataCoins={this.state.coins}
                coinDetail={this.showCoinDetail}
              />
            ) : (
              <CoinDetail
                coinDetail={this.showCoinDetail}
                coinDetailData={this.state.coinDetailData}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Inventory;
