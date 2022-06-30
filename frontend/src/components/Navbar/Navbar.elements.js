import styled from 'styled-components'
import {
  Container
} from '../../globalStyles'


export const Nav = styled.nav`
  background-color: #394F8A;
  min-height: 80px;
  height: 80px;
  width: 100%;
  font-size: 1.2rem;
  top: 0;
  z-index: 100;
  margin-bottom: 50px;
 
  display: flex;
  align-items: center;
  justify-content: center;

`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-evenly'};
    height: 100%;
    /* align-items: center; */

    /* border: 3px solid white; */

`

export const Dropdown = styled.div`
  display: ${props => props.display || 'none'};
  position: absolute;
  top: 80px; // sama kuin Nav height
  height: 300px;
  width: 400px;
  background-color: #394F8A;
  color: #E1FCFD;
  border: 1px solid black;

  &:hover {
      display: block;
    }
`

export const NavbarItem = styled.div`
    color: #E1FCFD;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    flex-direction: column;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
      border-bottom: 1px solid #E5B9A8;
    }

    &:hover ${Dropdown} {
      display: block;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    /* @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #394F8A;
    } */
`