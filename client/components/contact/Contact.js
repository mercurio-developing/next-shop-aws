import React, { Component } from "react";
import ContactStyle from "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ContactStyle }} />{" "}
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-xl-8 col-lg-8 text-left mx-auto my-auto pb-5">
              <form className="">
                <h4>CONTACT US</h4>
                <div class="form-group mt-3">
                  <label>FULL NAME</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Please enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="sample@sample.com"
                  />
                </div>
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea
                    placeholder="Please enter your message"
                    className="form-control"
                    rows="10"
                  />
                </div>
              </form>
              <button className="btn btn-md btn-gold float-right">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
