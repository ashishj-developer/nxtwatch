import ThemeContext from '../../Context/ThemeContext'
import {
  Darkbox,
  DarkLogoBox,
  DarkHeading,
  Lightbox,
  LightLogoBox,
  LightHeading,
} from './StyledComponents'

const SubHeader = props => {
  const {heading, logo} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const dark = () => (
          <Darkbox>
            <DarkLogoBox>{logo}</DarkLogoBox>
            <DarkHeading>{heading}</DarkHeading>
          </Darkbox>
        )

        const light = () => (
          <Lightbox>
            <LightLogoBox>{logo}</LightLogoBox>
            <LightHeading>{heading}</LightHeading>
          </Lightbox>
        )

        return isDark ? dark() : light()
      }}
    </ThemeContext.Consumer>
  )
}

export default SubHeader
