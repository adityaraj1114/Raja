import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <div className="navbar">
          <div className= "headerInner">
            {/* <div className="styles.logo">
              <img className={styles.aStrokeIcon} alt="" src="/a-stroke.svg" />
            </div> */}
            <div className= "menuOptions">
              <a href="##" className= "menuContent">
                Home
              </a>
              <a href="##" className= "menuContent">
                About
              </a>
              <a href="##" className= "menuContent">
                Skills
              </a>
              <a href="##" className= "menuContent">
                Journey
              </a>
              <a href="##" className= "menuContent">
                Projects
              </a>
              <a href="##" className= "menuContent">
                Contact
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
