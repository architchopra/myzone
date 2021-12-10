import React from "react";
import "./header.css";
import logo from "./images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
function header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <div className="header_search">
        <input type="text" className="header_searchbar" />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_l1">Hello</span>
          <span className="header_option_l2">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_option_l1">Return</span>
          <span className="header_option_l2">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_l1">Your</span>
          <span className="header_option_l2">zone</span>
        </div>
      </div>
    </div>
  );
}

export default header;
