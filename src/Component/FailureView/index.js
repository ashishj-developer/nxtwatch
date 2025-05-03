import ThemeContext from '../../Context/ThemeContext'
import {
  FailureDarkHeading,
  FailurelightHeading,
  FailureText,
  Failurebtn,
  Failureimg,
} from './StyledComponents'

const FailureView = props => {
  const {retry} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const lightFailureView = () => (
          <>
            <Failureimg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailurelightHeading>
              Oops! Something Went Wrong
            </FailurelightHeading>
            <FailureText>
              We are having some trouble completing your request.Please try
              again.
            </FailureText>
            <Failurebtn type="button" onClick={retry}>
              Retry
            </Failurebtn>
          </>
        )

        const DarkFailureView = () => (
          <>
            <Failureimg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
            <FailureDarkHeading>Oops! Something Went Wrong</FailureDarkHeading>
            <FailureText>
              We are having some trouble completing your request.Please try
              again.
            </FailureText>
            <Failurebtn type="button" onClick={retry}>
              Retry
            </Failurebtn>
          </>
        )

        return isDark ? DarkFailureView() : lightFailureView()
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
