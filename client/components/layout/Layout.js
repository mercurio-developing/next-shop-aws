import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LayoutStyle from "./Layout.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: LayoutStyle }} />
        <Navbar />
        <div className="container-fluid">{children}</div>
        <Footer />
      </>
    );
  }
}
export default Layout;
