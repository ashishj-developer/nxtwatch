import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'
import {
  CustomLi,
  CustomImg,
  CustomLogo,
  Custombox,
  Tittle,
  Text,
  TextBox,
  TittleDark,
} from './StyledComponents'
import ThemeContext from '../../Context/ThemeContext'

const HomeListItems = props => {
  const {eachItems} = props
  const time = formatDistanceToNow(new Date(eachItems.publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const lightItems = () => (
          <Link className="link" to={`/videos/${eachItems.id}`}>
            <CustomLi>
              <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
              <Custombox>
                <CustomLogo
                  src={eachItems.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <Tittle>{eachItems.title}</Tittle>

                  <Text>{eachItems.channel.name}</Text>
                  <TextBox>
                    <Text>{eachItems.viewCount} views</Text>
                    <Text>
                      {eachItems.publishedAt}
                      {time}
                    </Text>
                  </TextBox>
                </div>
              </Custombox>
            </CustomLi>
          </Link>
        )

        const darkItems = () => (
          <Link className="link" to={`/videos/${eachItems.id}`}>
            <CustomLi>
              <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
              <Custombox>
                <CustomLogo
                  src={eachItems.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <TittleDark>{eachItems.title}</TittleDark>

                  <Text>{eachItems.channel.name}</Text>
                  <TextBox>
                    <Text>{eachItems.viewCount} views</Text>
                    <Text>{time}</Text>
                  </TextBox>
                </div>
              </Custombox>
            </CustomLi>
          </Link>
        )

        return isDark ? darkItems() : lightItems()
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeListItems
