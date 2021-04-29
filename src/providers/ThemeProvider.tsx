import React, { createContext, useContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';

type DispatchTheme = (() => void) | undefined;
type ThemeState = string | undefined;

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeContext = createContext<ThemeState>('light');
export const ThemeDispatchContext = createContext<DispatchTheme>(undefined);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(ThemeContext);
export const useDispatchTheme = () => useContext(ThemeDispatchContext);

export default ThemeProvider;
