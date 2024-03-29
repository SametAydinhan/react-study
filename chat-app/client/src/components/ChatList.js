import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';
import ScrolableFeed from "react-scrollable-feed"
function ChatList() {
  const {messages} = useChat();
  return (
    <div className={styles.chatlist}>
      <ScrolableFeed forceScroll={true}>
      {
        messages.map((item,key) => (<ChatItem item={item} key={key}/>))
      }
      </ScrolableFeed>
    </div>
  )
}

export default ChatList