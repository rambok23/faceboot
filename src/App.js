import React, { useState, useEffect } from "react";
import {Component} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import { useStateValue } from "./StateProvider";
import Logo from "./images/logo_bg.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// IMPORTS FOR MESSENGER //

import { MenuItem, Select, Card, CardContent, FormControl, Input } from "@material-ui/core";
import DateFormat from "dateformat";
import Message from "./components/Message/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";



function App() {
  const [{ user }, dispatch] = useStateValue();
  
  // const's of MESSENGER
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

 /* useEffect = run code on a condition
 useEffect(() => {
  let username = prompt("Please enter your name");
  console.log(username);
  if (username === "") username = "Unknown";
  setUsername(username);
  // if its blank inside [], this code runs ONCE when the app components load
  // if we have a variable like input, it will be firing at every change
}, []); // condition */


const sendMessage = (event) => {
  // all the logic to send the message
  event.preventDefault(); // prevent form to refresh the page

  db.collection("messages").add({
    username: user.uid,
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  // append Message input to messages array
  /*setMessages([
    ...messages,
    {
      username: username,
      message: input,
    },
  ]);*/

  setTimeout(() => {
    const chat = document.querySelector("#chat");
    chat.scroll({ behavior: "smooth" });
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  setInput("");
};



    return (
      //ROHIT naming convention
      <Router>
      <div className="app">
       {!user ? (
         <Login />
       ) : (
        <>
            <Header />
          
          <div className="app__body">

          <Sidebar />
        
          <Switch>
          <Route path="/">
            <Feed />
            <Widgets />
          </Route>

          <Route path="/Message">
          
                <div className="container">
                <div className="header">
                  <img
                    className="header__logo"
                    src={Logo} alt="LOGO"
                  />
                  <h1 className="header__title">Faceboot Messenger</h1>
                  <h2 className="header__subtitle">Welcome {user.displayName}</h2>
                </div>
        
                <div id="chat" className="messageList">
                  <FlipMove>
                    {messages.map(({ id, message }) => {
                      return <Message key={id} username={user.uid} message={message} />;
                    })}
                  </FlipMove>{" "}
                </div>
                <div className="footer">
                  {/* form and button type submit allow the enter to send the message */}
                  <form className="app__form">
                    <FormControl className="app__formControl">
                      {/* set the input value of the state */}
                      <Input
                        className="app__input"
                        placeholder="Enter a message..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                      />
        
                      <IconButton
                        className="app__iconButton"
                        disabled={!input}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={sendMessage}
                      >
                        <SendIcon />
                      </IconButton>
                    </FormControl>
                  </form>
                </div>
              </div>
          </Route>
          </Switch>


        </div>
          
        
  
  
  
        </>
       )}
      </div>
      </Router>
    );
  }
 


export default App;