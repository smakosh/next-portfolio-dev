import React, { createContext, useContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';

type ThemeState = {
  theme: string | undefined;
  setTheme: (arg: string) => void;
};

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
