import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import StoryReel from "../StoryReel/StoryReel";
import Post from "../Post/Post";
import db from "../../firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Feed() {
    const [posts, setPosts] = useState([]);    
    
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id,
            data: doc.data() })))
        );
    }, []);

    return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

        {posts.map((post) => (
            <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
        ))}
    </div>
    );
}

export default Feed;