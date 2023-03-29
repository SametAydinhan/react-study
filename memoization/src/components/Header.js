import React from 'react'

function Header({number , data,increment}) {
  console.log("Header component re-renderd");
    return (
    <div>Header - {number}
    <br /><br />
    <code>{JSON.stringify(data)}</code>
    <button onClick={increment}>Clik</button>
    </div>
  )
}

export default React.memo(Header);