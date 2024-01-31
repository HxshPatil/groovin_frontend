import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ cartItemsCount }) => {
  return (
    <div className="navbar">
      <div className="heading">Goovin</div>
      <div className="cart-container">
        <HiOutlineShoppingBag className="cart-icon" />
        {cartItemsCount > 0 && <div className="cart-count">{cartItemsCount}</div>}
      </div>
    </div>
  );
};

export default Navbar;