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
    /* height: 100%; */
    min-height: 100vh;
    background-color: #E1FCFD;
    font-size: 1.2em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #394F8A;
`

export const SubPage = styled.div`
    max-width: 1300px;
    width: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #808080; */

    @media screen and (max-width: 960px) {
        width: 650px;
    }
`

export const Text = styled.p`
    margin-bottom: 15px;
    height: ${props => props.height || ''};

    @media screen and (max-width: 960px) {
        width: 70%;
        margin: 10px 15px 10px 10px;
    }
`

export const Button = styled.button`
    background-color: #4A5FC1;
    color: #E1FCFD;
    border-radius: 4px;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid #4A5FC1;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background-color: #394F8A;
        border: 1px solid #E1FCFD;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const FormRow = styled.div`
    
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: 'flex-start';
    margin-bottom: ${({ hasErrorText }) => hasErrorText ? '5px' : '20px'};
    flex-wrap: wrap;

    /* @media screen and (max-width: 960px) {
        
        margin-bottom: ${({ hasErrorText }) => hasErrorText ? '5px' : '40px'};
        flex-direction: column;
        
    } */
`

export const FormInput = styled.input`
    background-color: #FFFFFF;
    border: 1px solid #D6D9DC;
    border-radius: 3px;
    width: 250px;
    padding: 7px;
    font-size: 14px;

    /* @media screen and (max-width: 960px) {
        width: 100%;
    } */
`

export const FormLabel = styled.label`

    text-align: right;
    width: 120px;
    margin-top: 7px;
    padding-right: 20px;

    /* @media screen and (max-width: 960px) {
        margin-bottom: 15px;
    } */
    
`

export const Form = styled.form`
    /* width: 600px; */
    padding: 30px;
    margin: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
    }
`

export const ErrorMessage = styled.p`

    font-size: 16px;
    color: #FF6347;
    height: 10px;
    margin: 20px;
`

export default GlobalStyle