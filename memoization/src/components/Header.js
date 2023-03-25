import React from 'react'

function Header({number}) {
  console.log("Header component re-renderd");
    return (
    <div>Header - {number}</div>
  )
}

export default React.memo(Header);