import React from "react";
import "./Feed.css";
import { IoMdCreate } from "react-icons/io";
import InputOption from "./InputOption";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <IoMdCreate />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={FaRegImage} title="Photo" color="#70B5F9" />
          <InputOption
            Icon={MdOutlineVideoLibrary}
            title="Video"
            color="#E7A33E"
          />
          <InputOption Icon={MdEventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={GrArticle} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Posts */}
      <Post
        name="Abhishek Surse"
        description="This is a test."
        message="Wow this worked."
      />
    </div>
  );
}

export default Feed;
