import { ReactElement, createContext, useState } from 'react';

type ThemeContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (): void => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
