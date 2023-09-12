import React, { Fragment } from "react";
const Header = () => {
  return (
    <>
      <nav className="navbar row sticky">
        <div className="col-12 col-md-3">
          <img src="/images/logo.jpeg" alt="logo" className="logo"></img>
        </div>
        {/*  Search bar and Search icons */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Search Your Favorite Restaurant ......."
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className=" fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        {/* login */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login
          </button>
          {/* ml-> margine (3 unit from left) */}
          <span className="ml-3" id="cart">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
