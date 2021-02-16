import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import "./Feed.css";
import db from "./firebasedb";

function Feed() {
  const [post, setPost] = useState([]);
  

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
  
      </div>

      <TweetBox />
      {post.map((p) => {
        return (
          <Post 
            
            displayName={p.displayName}
            username={p.username}
            verified={p.verified}
            text={p.text}
            avatar={p.avatar}
            image={p.image}
          />
        );
      })}
    </div>
  );
}
export default Feed;
