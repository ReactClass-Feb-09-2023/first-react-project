import React from 'react'

function Footer({ value }) {
  return (
    <>
      <p>My Parent has this prop value sent to me:</p>
      <p>{value}</p>
    </>
  )
}

export default Footer
