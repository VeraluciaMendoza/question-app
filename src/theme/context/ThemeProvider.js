import { useEffect } from "react";
import { ThemeContext, useTheme } from "./ThemeContext";
import { getLocalStorage } from "../../utils/localStorage";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useToggleTheme from "../hooks/useToggleTheme";
import Global from "../global";

const ThemeStyledComponent = ({ children }) => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Global />
      {children}
    </StyledThemeProvider>
  );
};

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme, isThemeLight, setTheme } = useToggleTheme();

  useEffect(() => {
    const themeInLocalStorage = getLocalStorage('theme');

    if (themeInLocalStorage) {
      setTheme(themeInLocalStorage);
    }
  }, []);
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isThemeLight,
      }}
    >
      <ThemeStyledComponent>{children}</ThemeStyledComponent>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;