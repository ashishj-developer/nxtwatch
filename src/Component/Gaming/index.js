import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GamingCards from '../GamingCards'
import SubHeader from '../SubHeader'

import {
  BGcontainer,
  MainhomebgDark,
  CustomUl,
  Mainhomebg,
  Databox,
} from './StyledComponents'

const stage = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pendng: 'PENDING',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    renderState: stage.initial,
    renderItems: {},
  }

  componentDidMount() {
    this.gameApi()
  }

  gameApi = async () => {
    this.setState({renderState: stage.pendng})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    const data = await response.json()

    if (response.ok) {
      if (data.total !== 0) {
        const {videos} = data
        console.log(data)
        const updatedData = videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
        }))
        this.setState({renderState: stage.success, renderItems: updatedData})
      } else {
        this.setState({renderState: stage.empty})
      }
    } else {
      this.setState({renderState: stage.failure})
    }
  }

  renderFailure = () => (
    <Databox>
      <FailureView retry={this.gameApi} />
    </Databox>
  )

  renderLoader = () => (
    <Databox className='loader-container' data-testid='loader'>
      <Loader type='ThreeDots' color='#4f46e5' height='50' width='50' />
    </Databox>
  )

  lightTrending = () => {
    const {renderItems} = this.state

    return (
      <Mainhomebg>
        <SubHeader heading='Gaming' logo={<SiYoutubegaming />} />
        <CustomUl>
          {renderItems.map(eachItems => (
            <GamingCards key={eachItems.id} eachItems={eachItems} />
          ))}
        </CustomUl>
      </Mainhomebg>
    )
  }

  darkTrending = () => {
    const {renderItems} = this.state

    return (
      <MainhomebgDark>
        <SubHeader heading='Gaming' logo={<SiYoutubegaming />} />
        <CustomUl>
          {renderItems.map(eachItems => (
            <GamingCards key={eachItems.id} eachItems={eachItems} />
          ))}
        </CustomUl>
      </MainhomebgDark>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const renderSuccess = () => (
            <>{isDark ? this.darkTrending() : this.lightTrending()}</>
          )

          const renderStage = () => {
            const {renderState} = this.state

            switch (renderState) {
              case stage.success:
                return renderSuccess()
              case stage.pendng:
                return this.renderLoader()
              case stage.failure:
                return this.renderFailure()
              default:
                return null
            }
          }

          return (
            <div data-testid='gaming'>
              <Header />
              <BGcontainer>
                <SideBar selectedBtn='Gaming' />
                {renderStage()}
              </BGcontainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
