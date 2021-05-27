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
    
    const currentUser = useAuth()
    //console.log('HELLOHELLOHELLO')
    //console.log(currentUser) // = undefined
    //console.log(currentUser);
    /*
    const [friends, setFriends] = ([])
    {
    useEffect(() => {
        const fetchFriends = async () => {
        const db = firebase.firestore()
        const data = await db.collection("users").doc()
        //where('searchValues', 'array-contains-any',
        //searchVars).get()
        setEvents(data.docs.map(doc => doc.data()))
        } 

    fetchEvents()
    }, [input])
}
    /*
    const arr = [
        {
            'UserID': 
        },
        {

        },
        {

        }
    ]}

    //const dateRef = useRef();
	//const timeRef = useRef();
	//const nameRef = useRef();
    //const descriptionRef = useRef();
	//const history = useHistory()

    //dateTime "2022-04-10 13:00"
    //description "This is such and such."
    //eventName "Quinceañera"
    //eventid "12312"
    //schoolness 1
    //urgency 1
    //userId: "uwjGvRH7OPUrKb0uXgY53xZdGUK2"

	
    //const [input, setInput] = React.useState("");
    //const [selectedChoices, setSelectedChoices] = useState(choices);

    const [events, setEvents] = useState([])
*/

    //const emailRef = useRef();
    //let email = emailRef.current.value;

/*
    useEffect(() => {
        //const searchVars = input.split(' ')
        const fetchEvents = async () => {
        setEvents(data.docs.map(doc => doc.data()))
        } 

    fetchEvents()
    })

    */

    //const emailRef = useRef();
    //let email = emailRef.current.value;

    /*
    const db = firebase.firestore()
    const data = db.collection("users").where("email", "==", "user2@test.com").get() // change made in Signup.js to set document id to user email
    console.log("hello")
    console.log(data)
    */

    /*
    const App = () => {
        const [friend, setFriend] = useForm({
            friends: [
            "John",
            "Michael",
            "Jack",
            "Max"
            ]
        });
    }
    */

    //const [friend, setFriend] = useState([])
    //const [input, setInput] = React.useState("");
    /*
    var objData;
    useEffect( () => {
        const displayFriend = async () => {
        const db = firebase.firestore()
        //const dataRef = await db.collection("users")
        const data = await db.collection("users").where('email', '==', "user2@test.com").collection("friends").get()
        console.log(data.docs)
        }
    displayFriend()
    },[])



    var dataPiece = {
        email: "",
        friends: {},
        school: "",
        userName: ""
    }
    */

    //const db = firebase.firestore()
    //const data = db.collection('users').where('email', '==', 'user2@test.com').get()

    /*

    const userList = document.querySelector('#friend-list');
    function renderFriends(doc) 
    {
        let li = document.createElement('li');
        let friendList = document.createElement('ul');

        li.setAttribute('data-id', doc.id);
        firendList.textContent = doc.data().friends;

        li.appendChild(friendList);

        userList.appendChild(li);
    }

    const db = firebase.firestore();
    db.collection('users').where('email', '==' , 'user2@test.com').get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderFriends(doc);
        });
    });

    */

    const [friends, setFriends] = useState([]);
    const db = firebase.firestore()
    const data = db.collection('users').where('email', '==', 'user2@test.com')
    .get()
    .then((queryDocumentSnapshot) => {
        queryDocumentSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data2 = doc.get('friends');
            //console.log(data2);
            setFriends(data2);
            //setFriends(data2.docs.map(doc => doc.data()));
            //console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    //console.log('hello')

    /*
    //var friends = null;
    const db = firebase.firestore()
    const friends = (db.collection("users").where('email', '==', 'user2@test.com').get()).docs
    console.log(friends)
    console.log("hello")
    //console.log(friends)
    */
    /*
    const db = firebase.firestore()
    const data = await db.collection("events").where('searchValues', 'array-contains-any',
    searchVars).get()
    */
    
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

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
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              {/*
              <MenuItem icon={<FaList />}>Friend List</MenuItem>
              */}
              <SubMenu title="Friends" icon={<FaUserFriends />}>
                <MenuItem>Friend 1</MenuItem>
                <MenuItem>Friend 2</MenuItem>
              </SubMenu>
              <MenuItem icon={<RiPencilLine />}>Profile</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar