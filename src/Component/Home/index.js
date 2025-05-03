import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoSearch} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeListItems from '../HomeListItems'
import FailureView from '../FailureView'

import {
  BGcontainer,
  BannerBg,
  BannerTextCard,
  BannerCloseBtn,
  BannerText,
  BannerTextBtn,
  HomeLightBG,
  SearchBoxLight,
  SearchLightBtn,
  SearchLightInput,
  CustomUl,
  Mainhomebg,
  Databox,
  HomeDarkBG,
  SearchBoxDark,
  SearchDarkInput,
  SearchDarkBtn,
  EmptyImg,
  Failurebtn,
} from './StyledComponents'

const stage = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pendng: 'PENDING',
  failure: 'FAILURE',
  empty: 'EMPTY',
}

class Home extends Component {
  state = {
    isBannerRender: true,
    renderState: stage.initial,
    renderItems: {},
    tempvalue: '',
    searchValue: '',
  }

  componentDidMount() {
    this.homeapi()
  }

  homeapi = async () => {
    this.setState({renderState: stage.pendng})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchValue}`,
      options,
    )
    const data = await response.json()

    if (response.ok) {
      if (data.total !== 0) {
        const {videos} = data
        const updatedData = videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
        }))
        this.setState({renderState: stage.success, renderItems: updatedData})
      } else {
        this.setState({renderState: stage.empty})
      }
    } else {
      this.setState({renderState: stage.failure})
    }
  }

  renderStage = () => {
    const {renderState} = this.state

    switch (renderState) {
      case stage.success:
        return this.renderSuccess()
      case stage.pendng:
        return this.renderLoader()
      case stage.empty:
        return this.renderEmpty()
      case stage.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  renderFailure = () => (
    <Databox>
      <FailureView retry={this.homeapi} />
    </Databox>
  )

  renderEmpty = () => (
    <Databox>
      <EmptyImg
        src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
        alt='no videos'
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <Failurebtn type='button' onClick={this.homeapi}>
        Retry
      </Failurebtn>
    </Databox>
  )

  renderLoader = () => (
    <Databox className='loader-container' data-testid='loader'>
      <Loader type='ThreeDots' color='#4f46e5' height='50' width='50' />
    </Databox>
  )

  renderSuccess = () => {
    const {renderItems} = this.state

    return (
      <CustomUl>
        {renderItems.map(eachItems => (
          <HomeListItems key={eachItems.id} eachItems={eachItems} />
        ))}
      </CustomUl>
    )
  }

  closeBanner = () => {
    this.setState({isBannerRender: false})
  }

  renderBanner = () => (
    <BannerBg data-testid='banner'>
      <BannerTextCard>
        <img
          src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          alt='nxt watch logo'
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <BannerTextBtn type='button'>GET IT NOW</BannerTextBtn>
      </BannerTextCard>
      <BannerCloseBtn
        type='button'
        data-testid='close'
        onClick={this.closeBanner}
      >
        <IoMdClose />
      </BannerCloseBtn>
    </BannerBg>
  )

  updateValue = event => {
    this.setState({tempvalue: event.target.value})
  }

  searchBtn = () => {
    const {tempvalue} = this.state
    this.setState({searchValue: tempvalue}, this.homeapi)
  }

  lightHome = () => {
    const {isBannerRender, tempvalue} = this.state

    return (
      <Mainhomebg>
        {isBannerRender ? this.renderBanner() : null}
        <HomeLightBG>
          <SearchBoxLight>
            <SearchLightInput
              onChange={this.updateValue}
              placeholder='Search'
              type='search'
              value={tempvalue}
            />
            <SearchLightBtn
              onClick={this.searchBtn}
              data-testid='searchButton'
              type='button'
            >
              <IoSearch />
            </SearchLightBtn>
          </SearchBoxLight>
          {this.renderStage()}
        </HomeLightBG>
      </Mainhomebg>
    )
  }

  darkHome = () => {
    const {isBannerRender, tempvalue} = this.state

    return (
      <Mainhomebg>
        {isBannerRender ? this.renderBanner() : null}
        <HomeDarkBG>
          <SearchBoxDark>
            <SearchDarkInput
              onChange={this.updateValue}
              placeholder='Search'
              type='search'
              value={tempvalue}
            />
            <SearchDarkBtn
              onClick={this.searchBtn}
              data-testid='searchButton'
              type='button'
            >
              <IoSearch />
            </SearchDarkBtn>
          </SearchBoxDark>
          {this.renderStage()}
        </HomeDarkBG>
      </Mainhomebg>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div data-testid='home'>
              <Header />
              <BGcontainer>
                <SideBar selectedBtn='Home' />
                {isDark ? this.darkHome() : this.lightHome()}
              </BGcontainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
