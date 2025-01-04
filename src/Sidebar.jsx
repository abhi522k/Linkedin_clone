import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/id/1871613474/photo/gold-and-blue-fireworks-and-bokeh-in-new-year-eve-and-copy-space-abstract-background-holiday.webp?a=1&b=1&s=612x612&w=0&k=20&c=sdu7Zf46w9by5oydhRJ02gBozo18HiIfrP8VeGarsTs="
          alt=""
        />
        <RxAvatar className="sidebar_avatar" />
        <h2>Abhishek Surse</h2>
        <h4>abhisheksurse5@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,453</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,459</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
