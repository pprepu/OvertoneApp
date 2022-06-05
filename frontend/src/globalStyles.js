import styled, { createGlobalStyle } from 'styled-components'
import Roboto from './fonts/Roboto-Light-webfont.woff'
const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('woff');
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

@media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
}
`

export const Page = styled.div`
    /* width: 900px; */
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubPage = styled.div`
    /* margin: auto; */
    max-width: 1300px;
    width: 900px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 650px;
    }
`

export const Text = styled.p`
    margin: 25px;

    @media screen and (max-width: 960px) {
        width: 70%;
        margin: 10px 15px 10px 10px;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: solid 1px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export default GlobalStyle