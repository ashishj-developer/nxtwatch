import Styled from 'styled-components'

export const BGContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Roboto";
`
export const LoginCard = Styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 45vh;
    box-shadow: 1px 1px 20px #d7dfe9;
    border-radius: 10px;
    padding: 2vh;
`
export const Logo = Styled.img`
    align-self: center;
    height: 5vh;
    margin: 1vh;
`
export const CustomForm = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vh;
    height: 30vh;
`
export const Customlabel = Styled.label`
    margin-top: 2vh;
    color: #64748b;
    font-size: 1.2vh;
`
export const Custominput = Styled.input`
    margin-top: 0.2vh;
    border: 1px solid #64748b;
    color: #64748b;
    font-size: 1.5vh;
    padding: 10px;
    outline: none;
    border-radius: 5px;
`
export const Showpasswordbox = Styled.div`
    display: flex;
    margin: 1vh 0px;
`
export const LoginBtn = Styled.button`
    margin-top: 3vh;
    border: none;
    color: #ffffff;
    background-color: #3b82f6;
    font-weight: bold;
    font-size: 1.5vh;
    padding: 10px;
    outline: none;
    border-radius: 5px;
`
export const Errormsg = Styled.p`
    color: #ff0000;
    font-size: 1vh;
    font-weight: bold;
    margin: 0px;
`
