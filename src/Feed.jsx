import React, { useEffect, useState } from "react";
import "./Feed.css";
import { IoMdCreate } from "react-icons/io";
import InputOption from "./InputOption";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineVideoLibrary, MdEventNote } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import Post from "./Post";
import {
  collection,
  query,
  orderBy,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { motion } from "framer-motion";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    // Create a query to order posts by timestamp in descending order
    const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(postsQuery, (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => unsubscribe();
  }, [postsRef]);

  const savePost = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      await addDoc(postsRef, {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <IoMdCreate />
          <form>
            <input
              type="text"
              aria-label="Write a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={savePost} type="submit" aria-label="Send post">
              Send
            </button>
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
      <motion.div layout>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <motion.div
            key={id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Feed;
