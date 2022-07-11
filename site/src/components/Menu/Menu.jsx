import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
function Menu() {
    //when the component loads, we want to make sure that the menu is closed
    function closeMenu() {
        document.querySelector('#toggler').checked = false
    }
  return (
    <div className='Menu'>
        <input type="checkbox" className='toggler' id='toggler'/>
        <div className="Hamburger">
            <div></div>
        </div>
        <div className="Menu-sub">
            <div>
                <div>
                    <ul>
                        <li><Link to='/' onClick={closeMenu}>HOME</Link></li>
                        <li><Link to='/msr' onClick={closeMenu}>THE MSR</Link></li>
                        <li><Link to='/imane' onClick={closeMenu}>IMANE</Link></li>
                        <li><Link to='/contact' onClick={closeMenu}>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu