import { Avatar } from "@material-ui/core";
import * as React from "react";
import { Component, useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from "@material-ui/icons";
import "./Post.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import c from "classnames";



function Post({ profilePic, image, username, timestamp, message}) {
     // Set the initial count state to zero, 0
     const [count, setCount] = useState(0);

     // Create handleIncrement event handler
     const handleIncrement = () => {
       setCount(prevCount => prevCount + 1);
     };
   
     //Create handleDecrement event handler
     const handleDecrement = () => {
       setCount(prevCount => prevCount - 1);
     };

    return (

    <div className="post">
        <div className="post__top">
            <Avatar src={profilePic}
            className="post__avatar" />
          <div className="post__topInfo">
                <h3> {username} </h3>
                <p> {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>

        <div className="post__bottom">
            <p>{message}</p>
        </div>

        <div className="post__image">
            <img src={image} alt="" />
        </div>
        
        <div className="post__options">
            <div className="post__option">
                <ThumbUpIcon />

                <button onClick={handleIncrement}>Like</button>
                <p> {count} </p>
                <p>Like</p>

                <button onClick={handleDecrement}>Dislike</button>

            </div>

            <div className="post__option">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>

            <div className="post__option">
                <NearMeIcon />
                <p>Share</p>
            </div>

            <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlined />
            </div>
        
        </div>

    </div>

















     );
}
export default Post;