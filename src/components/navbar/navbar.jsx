import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ cartItemsCount }) => {
  return (
    <div className="navbar">
      <div className="cart-container">
        <FaCartArrowDown className="cart-icon" />
        <div className="cart-count">{cartItemsCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
