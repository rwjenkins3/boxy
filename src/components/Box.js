import React from 'react'
import './Box.css';

export const Box = (props) => {
  return (
    <div className='boxy' style={{backgroundColor: props.color}}>
        <p>{props.message}</p>
        <p>{props.subheading}</p>
    </div>
  )
}
