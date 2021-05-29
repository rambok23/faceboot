import React from "react";
import "../SidebarRow/SidebarRow.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
import Message from "../Message/Message";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
            src={user.photoURL}
            title={user.displayName}
        />
        
        <SidebarRow 
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
        />
        
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />

            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <Link to="/">Home</Link>
            <Link to="/Message">Messenger</Link>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined}
            title="Marketplace" />

            
        </div>
    );
}

export default Sidebar;