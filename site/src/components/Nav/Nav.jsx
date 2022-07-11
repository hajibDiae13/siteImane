import React from 'react'
import Menu from '../Menu/Menu'
import './Nav.css'
function Nav(props) {
  return (
    <div className='Nav'>
      <h1>{props.title}</h1>
      <Menu></Menu>
    </div>
  )
}

export default Nav