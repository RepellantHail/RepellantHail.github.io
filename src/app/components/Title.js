import React from 'react'

export default function Title({title}) {
  return (
    <h1
    className='m-3'
        style={{ 
            fontFamily: 'Pixelify_Sans', 
            fontWeight: 'bold', 
            fontSize: '5em',
            textShadow: '0 0 3px #0C356A'
            }}> 
        {title}
    </h1>
  )
}
