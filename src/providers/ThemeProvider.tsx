import React, { createContext, useContext } from 'react';
import useDarkMode from '../hooks/useDarkMode';

type ThemeState = {
  theme: string | undefined;
  setTheme: (arg: string) => void;
};

type ThemeProviderProps = { children: React.ReactNode };

export const themeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme: toggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);

export default ThemeProvider;
