import React from "react";
import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  return (
    <div class="header">
      <div className="header_left">
        <img src="image.png" alt="" />
        <div className="header_search">
          <IoSearchSharp />
          <input type="text" />
        </div>
      </div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
