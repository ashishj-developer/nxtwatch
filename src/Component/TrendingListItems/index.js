import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'
import {
  CustomLi,
  CustomImg,
  Tittle,
  Text,
  TextBox,
  TittleDark,
} from './StyledComponents'

class TrendingListItems extends Component {
  render() {
    const {eachItems} = this.props
    const time = formatDistanceToNow(new Date(eachItems.publishedAt))
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const lightItems = () => (
            <Link className="link" to={`/videos/${eachItems.id}`}>
              <CustomLi>
                <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
                <div>
                  <Tittle>{eachItems.title}</Tittle>
                  <Text>{eachItems.channel.name}</Text>
                  <TextBox>
                    <Text>{eachItems.viewCount} views</Text>
                    <Text>{time}</Text>
                  </TextBox>
                </div>
              </CustomLi>
            </Link>
          )

          const darkItems = () => (
            <Link className="link" to={`/videos/${eachItems.id}`}>
              <CustomLi>
                <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
                <div>
                  <TittleDark>{eachItems.title}</TittleDark>
                  <Text>{eachItems.channel.name}</Text>
                  <TextBox>
                    <Text>{eachItems.viewCount} views</Text>
                    <Text>{time}</Text>
                  </TextBox>
                </div>
              </CustomLi>
            </Link>
          )

          return isDark ? darkItems() : lightItems()
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(TrendingListItems)
