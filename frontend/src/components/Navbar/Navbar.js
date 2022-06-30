// import { useState } from 'react'
import Login from '../Login'
import Signup from '../Signup'
import {
  Nav,
  NavbarContainer,
  NavbarItem,
  Dropdown,
  NavMenu
} from './Navbar.elements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarItem >
            OvertoneApp
          </NavbarItem>
          <NavMenu>
            <NavbarItem>
              Login
              <Dropdown>
                <Login />
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              Signup
              <Dropdown>
                <Signup />
              </Dropdown>
            </NavbarItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar