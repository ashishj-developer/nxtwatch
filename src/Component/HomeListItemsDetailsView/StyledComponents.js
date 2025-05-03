import Styled from 'styled-components'

export const BGcontainer = Styled.div`
    display: flex;
`
export const Databox = Styled.div`
    color: #231f20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    width: 80vw;
    min-height: 90vh;
`
export const DetailsVIewDark = Styled.div`
    overflow: auto;
    width: 88vw;
    height: 90vh;
    padding: 2vh;
    background-color: #0f0f0f;
    color: #ffffff;
    font-family: "roboto";
`
export const DetailsVIewlight = Styled.div`
    overflow: auto;
    width: 88vw;
    height: 90vh;
    padding: 2vh;
    font-family: "roboto";
    background-color: #f9f9f9;
`

export const DetailsVIewlightHeading = Styled.p`
    font-size: 2.6vh;
`
export const ContainerDark = Styled.div`
    color: #ebebeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerLight = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LikeBox = Styled.div`
    display: flex;
    align-item: center;
`

export const LikelightBoxBtn = Styled.button`
    display: flex;
    background-color: transparent;
    border-width: 0px;
    font-size: 1.8vh;
    padding:1vh;
    cursor: pointer;
    color: #64748b;
`

export const LikeDarkBoxBtn = Styled.button`
    display: flex;
    background-color: transparent;
    color: #64748b;
    border-width: 0px;
    font-size: 1.8vh;
    padding:1vh;
    cursor: pointer;
`

export const LikedBtn = Styled.button`
    display: flex;
    background-color: transparent;
    color: #2563eb;
    border-width: 0px;
    font-size: 1.8vh;
    padding:1vh;
    cursor: pointer;
`

export const ProfileLogo = Styled.img`
    height: 5vh;
    margin-top: 2vh;
    margin-right: 2vh;
`
