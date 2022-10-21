import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
// import Cart from "./Cart"; {Another Way}
import { Cart } from "./";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">HpShop</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>

      <Cart />
    </div>
  );
};

export default Navbar;
