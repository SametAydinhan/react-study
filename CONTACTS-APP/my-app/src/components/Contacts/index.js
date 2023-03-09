import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
 function Contacts() {
  const[contacts, setContacts] = useState([
    {
      fullname: 'Samet',
      phone_number: "123123"
    },{
      fullname: 'Işınnur',
      phone_number: '456456'
    },{
      fullname: 'Ali',
      phone_number: '789789'
    }
  ]);
  
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
 
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts = {contacts}/>
    </div>
  )
}
export default Contacts;