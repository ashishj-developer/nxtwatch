import Styled from 'styled-components'

export const Mainhomebg = Styled.div`
    overflow: auto;
    height: 90vh;
`

export const BGcontainer = Styled.div`
    display: flex;
`

export const BannerBg = Styled.div`
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    height: 30vh;
    width: 84vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BannerTextCard = Styled.div`
    font-family: 'Roboto';
    margin-left: 2vh;
    width: 22vw;
`

export const BannerText = Styled.p`
    font-size: 2vh;
`

export const BannerCloseBtn = Styled.button`
    padding: 12px;
    border-width: 0px;
    border-radius: 5px;
    align-self: flex-start;
    background-color: transparent;
    font-size: 2vh;
`
export const BannerTextBtn = Styled.button`
    padding: 12px;
    border: 1px solid #000000;
    color: #000000;
    border-radius: 5px;
    background-color: transparent;
    font-size: 1.2vh;
    font-weight: bold;
`
export const HomeLightBG = Styled.div`
    width: 84vw;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh;
    background-color:  #f9f9f9;
    
`

export const HomeDarkBG = Styled.div`
    width: 84vw;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh;
    background-color: #181818;
`

export const SearchBoxLight = Styled.div`
    display: flex; 
    border: 1px solid #909090;
    border-radius: 4px;
`

export const SearchBoxDark = Styled.div`
    display: flex; 
    border: 1px solid #606060;
    border-radius: 4px;
`

export const SearchLightInput = Styled.input`
    width: 30vw;
    padding: 1vh;
    outline: none;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`
export const SearchDarkInput = Styled.input`
    width: 30vw;
    padding: 1vh;
    outline: none;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #606060;
    background-color: transparent;
`

export const SearchLightBtn = Styled.button`
    padding: 1vh;
    border: none;
    background-color: #f1f5f9;
    border-left: 1px solid #909090;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`
export const SearchDarkBtn = Styled.button`
    padding: 1vh;
    border: none;
    background-color: #606060;
    border-left: 1px solid #909090;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #cccccc;
`

export const CustomUl = Styled.ul`
    list-style: none;
    width: 80vw;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
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
export const EmptyImg = Styled.img`
    height: 30vh;
`

export const Failurebtn = Styled.button`
    color: #ffffff;
    background-color: #00306e;
    font-size: 2vh;
    font-weight: bold;
    padding: 10px;
    border-width: 0px;
    cursor: pointer;
`
