import Avatar from './components/Avatar'
import React from 'react'
function Header() {
  return (
    <>
      <Avatar
        src={'https://placehold.co/600x400'}
        alt={'user picture'}
        userName={'John'}
      />
    </>
  )
}

export default Header
