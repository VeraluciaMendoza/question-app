// import THEME_DARK from '../mode/dark'
// import THEME_LIGHT from '../mode/light'
import { dark, light } from '../mode'
import { setLocalStorage } from '../../utils/localStorage'
import { useState } from 'react'

const useToggleTheme = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    const currentTheme = theme.mode === 'light' ? dark : light
    // set localstorage
    setLocalStorage('theme', currentTheme)
    // set state
    setTheme(currentTheme)
  }

  return {
    isThemeLight: theme.mode === 'light',
    theme,
    toggleTheme,
    setTheme
  }
}

export default useToggleTheme
