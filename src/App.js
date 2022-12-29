import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


import './App.css';

const App = (props) => {
      // console.log(props)

      if(!localStorage.getItem("username")) return <LoginForm />
  return (
    <ChatEngine 
        height="100vh"
        projectID="e4635060-39fe-437c-a6c7-608481392408"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default App