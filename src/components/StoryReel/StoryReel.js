import React, { Component } from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

import Rohit from "../../images/rohit.jpeg";
import Rchota from "../../images/rchota.jpeg";

import Darpan from "../../images/darpan.jpeg";
import Dchota from "../../images/dchota.jpeg";

import Manthan from "../../images/manthan.jpeg";
import Mchota from "../../images/mchota.jpeg";

import Parth from "../../images/parth.jpeg";
import Pchota from "../../images/pchota.jpeg";


import Rutvik from "../../images/rutvik.jpeg";
import Ruchota from "../../images/ruchota.jpeg";


class StoryReel extends React.Component {

    state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };


    render(){
    return (
        <div className="storyReel">
            <Story
            image={Rchota}
            profileSrc={Rohit}
            title="Rohit"
            className="small"
            onClick={this.handleShowDialog}
            />

        {this.state.isOpen && (
         
		 <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <Story
            image={Rchota}
            profileSrc={Rohit}
            title="Rohit"
            onClick={this.handleShowDialog}
            /> 
          </dialog>
        
		)}




            <Story
            image={Parth}
            profileSrc={Pchota}
            title="Parth"
            />        
            
            <Story
            image={Dchota}
            profileSrc={Darpan}
            title="Darpan"
            />
            
            <Story
            image={Manthan}
            profileSrc={Mchota}
            title="Manthan"
            />

            <Story
            image={Ruchota}
            profileSrc={Rutvik}
            title="Rutvik"
            />
        </div> 
    );
    }
}
export default StoryReel;
