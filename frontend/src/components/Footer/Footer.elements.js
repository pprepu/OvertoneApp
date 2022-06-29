import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 180px;
  justify-content: space-between;

`
export const PopupText = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: absolute;
  z-index: 999;
  left: 0; 
  right: 0; 
  top: 40px;
  margin-left: auto; 
  margin-right: auto;
  width: 600px;
  height: 85vh;
  background: white;
  border-radius: 60px;

  flex-direction: column;
  justify-content: center;
  /* visibility: ${props => props.show ? 'visible' : 'hidden'}; */
`
export const FooterElement = styled.div`
  border: 1px solid black;
  width: 30%;
  height: 100%;
  font-size: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    transition: all 0.5s ease-out;
    background-color: #F8F8F8;
    border-radius: 25px;
  }
  
`