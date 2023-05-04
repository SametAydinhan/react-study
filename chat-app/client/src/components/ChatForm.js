import styles from "./styles.module.css"
import { useState } from 'react'
function ChatForm() {
    const [message, setMessages] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(message);
        setMessages("");
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput} value={message} onChange={(e) => setMessages(e.target.value)}/>
        </form>
    </div>
  )
}

export default ChatForm