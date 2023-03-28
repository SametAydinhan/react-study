import React from 'react'

function Header({number , data}) {
  console.log("Header component re-renderd");
    return (
    <div>Header - {number}
    <br /><br />
    <code>{JSON.stringify(data)}</code>
    
    </div>
  )
}

export default React.memo(Header);