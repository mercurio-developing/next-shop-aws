import React, { Component } from "react";
import InventoryStyle from "./Inventory.scss";
import Coins from "./coins/Coins";
import CategoryList from "./CategoryList";
// Mocks
import categories from "./mocks/categories";
import coins from "./mocks/data";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      allCategories: false,
      coins
    };
    this.checkCategory = this.checkCategory.bind(this);
    this.checkAll = this.checkAll.bind(this);
  }

  checkCategory(id) {
    let dataCategories = this.state.categories;
    dataCategories[id].checked = !dataCategories[id].checked;
    this.setState({ categories: dataCategories });
  }
  checkAll() {
    let categories = this.state.categories;
    let checked = !this.state.allCategories;
    categories.map(category => (category.checked = checked));
    this.setState({ categories: categories, allCategories: checked });
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
            <Coins
              dataCategories={this.state.categories}
              dataCoins={this.state.coins}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Inventory;
