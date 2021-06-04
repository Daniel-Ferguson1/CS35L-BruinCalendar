import React, { useState, useRef, useEffect, useForm } from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Users from "../components/Users"

import UCLA_logo from "./UCLA_logo.png"
import firebase from 'firebase/app'
import { app } from '../firebase.js';
import SearchField from "react-search-field";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
  } from "react-pro-sidebar";

// can choose whatever we want
import { FaList, FaRegHeart, FaUserFriends } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

/*
const choices = [
    { key: "choice1", description: "Event Search" },
    { key: "choice2", description: "Friend Search" },
  ];
  */

const Sidebar = () => {
  const [error, setError] = useState('') 
	const [events, setEvents] = useState([]) 
	const { currentUser, logout } = useAuth()

  const history = useHistory()
  //const currentUser = useAuth()
    
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  async function handleLogout(){
		console.log('heyyh')
		setError("");
		try{
			await logout();
			//console.log('hey')
			history.push("/login")
		}
		catch{
			//console.log(err)
			setError("Failed to log out");
		}
	}

  //console.log('hello')

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <img className="ucla_logo" src={UCLA_logo} />
            <span className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}             
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </span>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick={() => {history.push("/")}} icon={<FiHome />}>Home</MenuItem>
              <MenuItem onClick={() => {history.push("/FriendList")}} icon={<FaList />}>Friend List</MenuItem>
              {/*<MenuItem icon={<RiPencilLine />}>Profile</MenuItem>*/}
              <MenuItem onClick={() => {history.push("/Dashboard")}} icon={<FaList />}>Profile</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={handleLogout} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar