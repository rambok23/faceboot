/*import React from "react";
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
            <Link to="/cart">Marketplace</Link>
            <Link to="/statewise">COVID-19</Link>

            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined}
            title="Marketplace" />

            
        </div>
    );
}

export default Sidebar; */































import React, { useState } from "react";

import {
  MessageOutlined,
  HomeOutlined,
  ShopOutlined,
  CodepenOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import 'antd/dist/antd.css';

import { Link } from "react-router-dom";

const { Sider } = Layout;

const LeftSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      className="site-layout-background"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      breakpoint="md"
    >
      <div className="logo">
        <span className="font-italic">FaceBoot</span>
      </div>

      <Menu theme="light" mode="inline" style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}  >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />}>
          <Link to="/Message">Message</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ShopOutlined />}>
          <Link to="/cart"> Cart </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<CodepenOutlined />}>
          <Link to="/statewise"> COVID </Link>
        </Menu.Item>
      
      </Menu>
    </Sider>
  );
};

export default LeftSider;
