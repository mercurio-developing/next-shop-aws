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
      coins: this.props.coins,
      coinDetailData: {},
      showDetail: false
    };
    this.checkCategory = this.checkCategory.bind(this);
    this.checkAll = this.checkAll.bind(this);
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

  render() {
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
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5">
            {this.state.coins ? (
              <Coins
                dataCategories={this.state.categories}
                dataCoins={this.state.coins}
              />
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

Inventory.propTypes = {
  coins: Proptypes.arrayOf(Object).isRequired
};

export default Inventory;
