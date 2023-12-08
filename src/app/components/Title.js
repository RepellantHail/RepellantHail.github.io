import React from 'react'

export default function Title({title}) {
  return (
    <h1
        style={{ fontFamily: 'Pixelify_Sans', fontWeight: 'bold' }}> 
        {title}
    </h1>
  )
}
