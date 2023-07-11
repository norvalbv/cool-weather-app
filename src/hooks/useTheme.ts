import React, { useContext } from 'react';
import ThemeContext from 'context/theme';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme context must be inside provider.');

  return context;
};

export default useTheme;
