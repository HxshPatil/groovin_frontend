import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./navbar.css";

const Navbar = ({ cartItemsCount }) => {
  return (
    <div className="navbar">
      <div className="cart-container">
        <HiOutlineShoppingBag className="cart-icon" />
        <div className="counter">
        {cartItemsCount > 0 && <div className="cart-count">{cartItemsCount}</div>}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;