import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./Post.css";
import InputOption from "./InputOption";
import { BiLike } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaShareAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <RxAvatar className="sidebar_avatar" />
        <div className="post_info">
          <h2>Abhishek Surse</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_button">
        <InputOption Icon={BiLike} title="like" color="gray" />
        <InputOption Icon={TfiCommentAlt} title="comment" color="gray" />
        <InputOption Icon={FaShareAlt} title="share" color="gray" />
        <InputOption Icon={IoSend} title="send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
