import React from 'react'
import user from './user.png';
const Chatmessage = ({name,message}) => {
  return (
    <div id="chatmessage">
      <div id="messagename">
      <img src={user} alt="usericon" height={30}/>
      <span id="name">{name} </span>
      <span id="message">{message}</span>
      </div>
    </div>
  )
}

export default Chatmessage
