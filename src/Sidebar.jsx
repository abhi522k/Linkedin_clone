import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          className="sidebar_top_image"
          src="https://media.istockphoto.com/id/1871613474/photo/gold-and-blue-fireworks-and-bokeh-in-new-year-eve-and-copy-space-abstract-background-holiday.webp?a=1&b=1&s=612x612&w=0&k=20&c=sdu7Zf46w9by5oydhRJ02gBozo18HiIfrP8VeGarsTs="
          alt=""
        />
        {user.photoUrl ? (
          <img
            className="sidebar_avatar_icon"
            src={user.photoUrl}
            alt="User Avatar"
          />
        ) : (
          <span className="sidebar_avatar_text">
            {user.email[0].toUpperCase()}
          </span>
        )}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
        <p>Recent</p>
        {recentItem("react JS")}
        {recentItem("linkedin clone")}
        {recentItem("redux")}
        {recentItem("firebase")}
      </div>
    </div>
  );
}

export default Sidebar;
