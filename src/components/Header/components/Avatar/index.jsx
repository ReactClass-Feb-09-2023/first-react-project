import './avatar.css'

import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
  font-size: 1rem;
  color: green;
`

function Avatar({ src, alt, width, height, userName }) {
  const imageStyle = {
    width,
    height,
    borderRadius: '50%',
    padding: '1rem'
  }

  return (
    <div className="avatar">
      <img src={src} alt={alt} style={imageStyle} />
      <Name>{userName}</Name>
    </div>
  )
}

Avatar.defaultProps = {
  width: 100,
  height: 100
}
export default Avatar
