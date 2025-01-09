import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ Icon, AvatarPic, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {AvatarPic &&
        (user ? (
          user?.photoUrl ? (
            <img
              className="headerOption_avatar_img"
              src={user?.photoUrl}
              alt="User Avatar"
            />
          ) : (
            <span className="headerOption_avatar_text">
              {user?.email[0].toUpperCase()}
            </span>
          )
        ) : (
          AvatarPic && <AvatarPic className="headerOption_icon" />
        ))}
      <h3 className="headerOption_title">
        {AvatarPic && !user ? "User" : title}
      </h3>
    </div>
  );
}

export default HeaderOption;
