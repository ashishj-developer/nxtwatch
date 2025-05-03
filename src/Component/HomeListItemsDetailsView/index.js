import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'

import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import {
  BGcontainer,
  Databox,
  DetailsVIewDark,
  DetailsVIewlightHeading,
  ContainerDark,
  ContainerLight,
  LikeBox,
  ProfileLogo,
  LikelightBoxBtn,
  DetailsVIewlight,
  LikeDarkBoxBtn,
  LikedBtn,
} from './StyledComponents'

const stage = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pendng: 'PENDING',
  failure: 'FAILURE',
}

class HomeListItemsDetailsView extends Component {
  state = {
    renderState: stage.initial,
    renderItems: {},
  }

  componentDidMount() {
    this.detailsApi()
  }

  detailsApi = async () => {
    this.setState({renderState: stage.pendng})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({renderState: stage.success, renderItems: updatedData})
    } else {
      this.setState({renderState: stage.failure})
    }
  }

  renderLoader = () => (
    <Databox className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </Databox>
  )

  renderFailure = () => (
    <Databox>
      <FailureView retry={this.detailsApi} />
    </Databox>
  )

  render() {
    const {renderState} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDark,
            likedList,
            chnageLikedList,
            unlikeList,
            changeUnlikeList,
            savedList,
            changeSavedList,
          } = value

          const likebtnFun = () => {
            const {renderItems} = this.state
            chnageLikedList(renderItems.id)
          }

          const unLikebtnFun = () => {
            const {renderItems} = this.state
            changeUnlikeList(renderItems.id)
          }

          const savedFun = () => {
            const {renderItems} = this.state
            changeSavedList(renderItems)
          }

          const renderDarkComponents = () => {
            const {renderItems} = this.state

            const isLiked = likedList.includes(renderItems.id)
            const isUnliked = unlikeList.includes(renderItems.id)
            const isSavedActive = savedList.some(
              itmes => itmes.id === renderItems.id,
            )

            return (
              <DetailsVIewDark>
                <ReactPlayer
                  height="50vh"
                  width="82vw"
                  url={renderItems.videoUrl}
                />
                <DetailsVIewlightHeading>
                  {renderItems.title}
                </DetailsVIewlightHeading>
                <ContainerDark>
                  <p>
                    {renderItems.viewCount} views - {renderItems.publishedAt}
                  </p>
                  <LikeBox>
                    {isLiked ? (
                      <LikedBtn onClick={likebtnFun} type="button">
                        <BiLike />
                        Like
                      </LikedBtn>
                    ) : (
                      <LikeDarkBoxBtn onClick={likebtnFun} type="button">
                        <BiLike />
                        Like
                      </LikeDarkBoxBtn>
                    )}

                    {isUnliked ? (
                      <LikedBtn onClick={unLikebtnFun} type="button">
                        <BiDislike />
                        Dislike
                      </LikedBtn>
                    ) : (
                      <LikeDarkBoxBtn onClick={unLikebtnFun} type="button">
                        <BiDislike />
                        Dislike
                      </LikeDarkBoxBtn>
                    )}

                    {isSavedActive ? (
                      <LikedBtn onClick={savedFun} type="button">
                        <RiMenuAddFill />
                        Saved
                      </LikedBtn>
                    ) : (
                      <LikeDarkBoxBtn onClick={savedFun} type="button">
                        <RiMenuAddFill />
                        Save
                      </LikeDarkBoxBtn>
                    )}
                  </LikeBox>
                </ContainerDark>
                <hr />
                <BGcontainer>
                  <ProfileLogo
                    src={renderItems.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <p>{renderItems.channel.name}</p>
                    <p>{renderItems.channel.subscriberCount} subscriber</p>
                    <p>{renderItems.description}</p>
                  </div>
                </BGcontainer>
              </DetailsVIewDark>
            )
          }

          const renderlightComponents = () => {
            const {renderItems} = this.state

            const isLiked = likedList.includes(renderItems.id)
            const isUnliked = unlikeList.includes(renderItems.id)
            const isSavedActive = savedList.some(
              itmes => itmes.id === renderItems.id,
            )

            return (
              <DetailsVIewlight>
                <ReactPlayer
                  height="50vh"
                  width="82vw"
                  url={renderItems.videoUrl}
                />
                <DetailsVIewlightHeading>
                  {renderItems.title}
                </DetailsVIewlightHeading>
                <ContainerLight>
                  <p>
                    {renderItems.viewCount} views -{renderItems.publishedAt}
                  </p>
                  <LikeBox>
                    {isLiked ? (
                      <LikedBtn onClick={likebtnFun} type="button">
                        <BiLike />
                        Like
                      </LikedBtn>
                    ) : (
                      <LikelightBoxBtn onClick={likebtnFun} type="button">
                        <BiLike />
                        Like
                      </LikelightBoxBtn>
                    )}

                    {isUnliked ? (
                      <LikedBtn onClick={unLikebtnFun} type="button">
                        <BiDislike />
                        Dislike
                      </LikedBtn>
                    ) : (
                      <LikelightBoxBtn onClick={unLikebtnFun} type="button">
                        <BiDislike />
                        Dislike
                      </LikelightBoxBtn>
                    )}

                    {isSavedActive ? (
                      <LikedBtn onClick={savedFun} type="button">
                        <RiMenuAddFill />
                        Saved
                      </LikedBtn>
                    ) : (
                      <LikelightBoxBtn onClick={savedFun} type="button">
                        <RiMenuAddFill />
                        Save
                      </LikelightBoxBtn>
                    )}
                  </LikeBox>
                </ContainerLight>
                <hr />
                <BGcontainer>
                  <ProfileLogo
                    src={renderItems.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <p>{renderItems.channel.name}</p>
                    <p>{renderItems.channel.subscriberCount} subscriber</p>
                    <p>{renderItems.description}</p>
                  </div>
                </BGcontainer>
              </DetailsVIewlight>
            )
          }

          const darkrender = () => {
            switch (renderState) {
              case stage.success:
                return renderDarkComponents()
              case stage.pendng:
                return this.renderLoader()
              case stage.failure:
                return this.renderFailure()
              default:
                return null
            }
          }

          const lightRender = () => {
            switch (renderState) {
              case stage.success:
                return renderlightComponents()
              case stage.pendng:
                return this.renderLoader()
              case stage.failure:
                return this.renderFailure()
              default:
                return null
            }
          }

          return (
            <div data-testid="videoItemDetails">
              <Header />
              <BGcontainer>
                <SideBar />
                {isDark ? darkrender() : lightRender()}
              </BGcontainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeListItemsDetailsView
