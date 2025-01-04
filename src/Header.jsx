import React from "react";
import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import HeaderOption from "./HeaderOption";

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

      <div className="header_right">
        <HeaderOption Icon={IoHome} title="Home" />
        <HeaderOption Icon={IoIosPeople} title="My Network" />
        <HeaderOption Icon={FaBriefcase} title="Jobs" />
        <HeaderOption Icon={MdMessage} title="Messaging" />
        <HeaderOption Icon={FaBell} title="Notifications" />
        <HeaderOption Icon={RxAvatar} title="Me" />
      </div>
    </div>
  );
}

export default Header;