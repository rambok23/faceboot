import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";
import StoryReel from "../StoryReel/StoryReel";

function Story({ image, profileSrc, title }) {
    return (
    <div style={{ backgroundImage: `url(${image})` }}
    className="story">
        <Avatar className="story__avatar" src={profileSrc} />
        <h4> {title} </h4>     
        <StoryReel />
    </div>
    );
}

export default Story;