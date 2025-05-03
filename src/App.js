import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from './Component/LoginPage'
import ProtectedRoute from './Component/ProtectedRoute'
import Home from './Component/Home'
import Trending from './Component/Trending'
import Gaming from './Component/Gaming'
import NotFound from './Component/NotFound'
import HomeListItemsDetailsView from './Component/HomeListItemsDetailsView'
import SavedVideos from './Component/SavedVideos'
import ThemeContext from './Context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    likedList: [],
    unlikeList: [],
    savedList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  chnageLikedList = id => {
    const {likedList, unlikeList} = this.state
    const checkLiked = likedList.includes(id)

    if (!checkLiked) {
      this.setState(prevState => ({likedList: [...prevState.likedList, id]}))
    } else {
      const newList = likedList.filter(eachitms => eachitms !== id)
      this.setState({likedList: newList})
    }

    const checkUnliked = unlikeList.includes(id)
    if (checkUnliked) {
      const newList = unlikeList.filter(eachitms => eachitms !== id)
      this.setState({unlikeList: newList})
    }
  }

  changeUnlikeList = id => {
    const {likedList, unlikeList} = this.state
    const checkUnliked = unlikeList.includes(id)

    if (!checkUnliked) {
      this.setState(prevState => ({unlikeList: [...prevState.unlikeList, id]}))
    } else {
      const newList = unlikeList.filter(eachitms => eachitms !== id)
      this.setState({unlikeList: newList})
    }

    const checkLiked = likedList.includes(id)
    if (checkLiked) {
      const newList = likedList.filter(eachitms => eachitms !== id)
      this.setState({likedList: newList})
    }
  }

  changeSavedList = obj => {
    const {savedList} = this.state
    const check = savedList.some(items => items.id === obj.id)
    if (!check) {
      this.setState(prevState => ({savedList: [...prevState.savedList, obj]}))
    } else {
      const newList = savedList.filter(items => items.id !== obj.id)
      this.setState({savedList: newList})
    }
  }

  render() {
    const {isDark, likedList, unlikeList, savedList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          likedList,
          unlikeList,
          savedList,
          chnageLikedList: this.chnageLikedList,
          changeUnlikeList: this.changeUnlikeList,
          changeSavedList: this.changeSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/not-found" component={NotFound} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={HomeListItemsDetailsView}
          />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
