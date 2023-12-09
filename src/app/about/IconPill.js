import React from 'react'

export default function IconPill({title, children}) {
  return (
    <h6 
        className='m-1 p-1'
        style={{ 
            backgroundColor: '#0C356A',
            minWidth: 'auto',
            borderRadius: '5px',
        }}
    >
        {children} {title}
    </h6>
  )
}
