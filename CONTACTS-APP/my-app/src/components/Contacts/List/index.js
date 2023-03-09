import {useState} from 'react'

function List({contacts}) {
  const [filetText,setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filetText.toLocaleLowerCase())
    )
  });


  return (
    <div>

      <input placeholder='Filter contact' value={filetText} onChange={(e) => setFilterText(e.target.value)}/>
      <ul>
        {
          filtered.map((contact, i) => 
          <li key={i}>{contact.fullname}</li> )
        }
      </ul>
    </div>
  )
  }

export default List