import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./Post.css";
import InputOption from "./InputOption";
import { BiLike } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { FiShare2 } from "react-icons/fi";
import { IoSendOutline } from "react-icons/io5";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        {photoUrl ? (
          <img className="post_avatar_img" src={photoUrl} alt="User Avatar" />
        ) : (
          <span className="post_avatar_text">
            {description[0].toUpperCase()}
          </span>
        )}
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_button">
        <InputOption Icon={BiLike} title="like" color="gray" />
        <InputOption Icon={TfiCommentAlt} title="comment" color="gray" />
        <InputOption Icon={FiShare2} title="share" color="gray" />
        <InputOption Icon={IoSendOutline} title="send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
