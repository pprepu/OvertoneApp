import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 180px;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

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
  padding-right: 10px;
  padding-left: 10px;
  width: 600px;
  height: 85vh;
  background-color: #4A5FC1;
  color: #E1FCFD;
  border-radius: 60px;
  border: 3px solid #394F8A;

  flex-direction: column;
  justify-content: center;
  /* visibility: ${props => props.show ? 'visible' : 'hidden'}; */
`
export const FooterElement = styled.button`
  border: 3px solid #394F8A;
  color: #394F8A;
  background-color: #E5B9A8;
  width: 30%;
  height: 100%;
  font-size: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    transition: all 0.5s ease-out;
    background-color: #9CF6FB;
    border-radius: 25px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  
`