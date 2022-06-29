import styled, { createGlobalStyle } from 'styled-components'
import Roboto from './fonts/Roboto-Light-webfont.woff'
const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${Roboto}) format('woff');
        font-display: block;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }
`

export const Container = styled.div`

    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    height: ${props => props.height || ''};

@media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
}
`

export const Page = styled.div`
    height: 100vh;
    background-color: #888888;
    font-size: 1.2em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubPage = styled.div`
    max-width: 1300px;
    width: 900px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #808080; */

    @media screen and (max-width: 960px) {
        width: 650px;
    }
`

export const Text = styled.p`
    margin: 25px;
    height: ${props => props.height || ''};

    @media screen and (max-width: 960px) {
        width: 70%;
        margin: 10px 15px 10px 10px;
    }
`

export const Button = styled.button`
    background-color: #D0D0D0;
    border-radius: 4px;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: solid 1px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background-color: #F8F8F8;
        border-radius: 15px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export default GlobalStyle