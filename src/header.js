import React from "react";
import "./header.css";
import logo from "./images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  var s = user?.email;
  s = s?.substring(0, s.indexOf("@"));
  // console.log(s);
  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header_logo" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchbar" />
        <SearchIcon className="header_searchicon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_l1">Hello {s} </span>
            <span className="header_option_l2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option_l1">Return</span>
          <span className="header_option_l2">& Order</span>
        </div>

        <div className="header_option">
          <span className="header_option_l1">Your</span>
          <span className="header_option_l2">Zone</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_optionbasket">
            <ShoppingCartIcon
              sx={{
                fontSize: "x-large",
                marginRight: "0.2em",
              }}
            />
            <span className="header_option_l2 header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
