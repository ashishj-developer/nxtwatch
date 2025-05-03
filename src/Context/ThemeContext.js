import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  likedList: [],
  chnageLikedList: () => {},
  unlikeList: [],
  changeUnlikeList: () => {},
  savedList: [],
  changeSavedList: () => {},
})

export default ThemeContext
