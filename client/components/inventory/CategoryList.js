import React, { Component } from "react";
import Proptypes from "prop-types";
class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      dataCategories,
      checkCategory,
      allCategories,
      checkAll
    } = this.props;

    return (
      <div className="row h-100 mt-5">
        <div className="col-10">
          <li className="ml-4 pb-2">
            <span
              onClick={() => {
                checkAll();
              }}
            >
              {allCategories ? (
                <i className="far fa-check-circle pr-2" />
              ) : (
                <i className="far fa-circle pr-2" />
              )}
              All Categories
            </span>
          </li>{" "}
          <ul>
            {dataCategories.map((category, id) => (
              <li key={id} className="pb-1">
                <span
                  onClick={() => {
                    checkCategory(id);
                  }}
                >
                  {category.checked ? (
                    <i className="far fa-check-circle pr-2" />
                  ) : (
                    <i className="far fa-circle pr-2" />
                  )}
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
CategoryList.propTypes = {
  dataCategories: Proptypes.arrayOf(Object).isRequired,
  checkCategory: Proptypes.func.isRequired,
  checkAll: Proptypes.func.isRequired,
  allCategories: Proptypes.bool.isRequired
};
export default CategoryList;
