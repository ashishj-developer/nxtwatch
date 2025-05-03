import {Component} from 'react'
import {RiMenuAddLine} from 'react-icons/ri'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoDetails from '../SavedVideoDetails'
import SubHeader from '../SubHeader'

import {
  BGcontainer,
  MainhomebgDark,
  CustomUl,
  Mainhomebg,
  SavedBgDark,
  SavedBgLight,
  SavedBgImg,
} from './StyledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedList} = value

          const lightSavedVideos = () => {
            if (savedList.length !== 0) {
              return (
                <Mainhomebg>
                  <SubHeader heading="Saved Videos" logo={<RiMenuAddLine />} />
                  <CustomUl>
                    {savedList.map(eachItems => (
                      <SavedVideoDetails
                        key={eachItems.id}
                        eachItems={eachItems}
                      />
                    ))}
                  </CustomUl>
                </Mainhomebg>
              )
            }
            return (
              <SavedBgLight>
                <SavedBgImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <h1>No Saved Videos Found</h1>
                <p>You can save your videos while watching them.</p>
              </SavedBgLight>
            )
          }

          const darkSavedVideos = () => {
            if (savedList.length !== 0) {
              return (
                <MainhomebgDark>
                  <SubHeader heading="Saved Videos" logo={<RiMenuAddLine />} />
                  <CustomUl>
                    {savedList.map(eachItems => (
                      <SavedVideoDetails
                        key={eachItems.id}
                        eachItems={eachItems}
                      />
                    ))}
                  </CustomUl>
                </MainhomebgDark>
              )
            }
            return (
              <SavedBgDark>
                <SavedBgImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <h1>No Saved Videos Found</h1>
                <p>You can save your videos while watching them.</p>
              </SavedBgDark>
            )
          }

          const renderSuccess = () => (
            <>{isDark ? darkSavedVideos() : lightSavedVideos()}</>
          )

          return (
            <div data-testid="savedVideos">
              <Header />
              <BGcontainer>
                <SideBar selectedBtn="Saved videos" />
                {renderSuccess()}
              </BGcontainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
