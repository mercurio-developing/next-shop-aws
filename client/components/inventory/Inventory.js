import React, { Component } from "react";
import Proptypes from "prop-types";
import InventoryStyle from "./Inventory.scss";
import categories from "./mocks/categories";
//Components
import CategoryList from "./CategoryList";
import Coins from "./coins/Coins";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      allCategories: false,
      coinDetailData: {},
      showDetail: false,
      orderByPrice: true
    };
    this.checkCategory = this.checkCategory.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.byPrice = this.byPrice.bind(this);
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

  byPrice() {
    this.setState({ orderByPrice: !this.state.orderByPrice });
  }

  render() {
    const { dataCoins } = this.props;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: InventoryStyle }} />
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list">
            <CategoryList
              dataCategories={this.state.categories}
              checkCategory={this.checkCategory}
              checkAll={this.checkAll}
              allCategories={this.state.allCategories}
            />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5 mt-1">
            {dataCoins !== null ? (
              <Coins
                dataCategories={this.state.categories}
                dataCoins={dataCoins}
              />
            ) : (
              <p>LOADING</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

Inventory.propTypes = {
  dataCoins: Proptypes.arrayOf(Object).isRequired
};

export default Inventory;
