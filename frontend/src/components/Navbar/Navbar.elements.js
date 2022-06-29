import styled from 'styled-components'
import {
  Container
} from '../../globalStyles'


export const Nav = styled.nav`
  background-color: grey;
  height: 80px;
  width: 100%;
  font-size: 1.2rem;
  top: 0;
  z-index: 100;
 
  display: flex;
  align-items: center;
  justify-content: center;

`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-between'};
    height: 100%;
    /* align-items: center; */

    /* border: 1px solid black; */

`

export const Dropdown = styled.div`
  display: ${props => props.display || 'none'};
  position: absolute;
  top: 80px; // sama kuin Nav height
  height: 200px;
  width: 350px;
  /* background-color: white; */
  border: 1px solid black;

  &:hover {
      display: block;
    }
`

export const NavbarItem = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    flex-direction: column;
    cursor: pointer;

    &:hover ${Dropdown} {
      display: block;
    }
`

