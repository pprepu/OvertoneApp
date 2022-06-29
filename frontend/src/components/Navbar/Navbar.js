

import {
  Nav,
  NavbarContainer,
  NavbarItem,
  Dropdown,
} from './Navbar.elements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarItem>
            lel
          </NavbarItem>
          <NavbarContainer justifyContent='right'>
            <NavbarItem>
              Login
              <Dropdown>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              Signup
            </NavbarItem>
          </NavbarContainer>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar