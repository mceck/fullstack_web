import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const ThemeData: DefaultTheme = {
  borderRadius: '5px',
  padding: '1rem',
  colors: {
    primary: '#ff0000',
    secondary: '#0000ff',
    error: '#ff0000',
    background: '#ffffff',
    text: '#000000',
    subText: '#444444',
  },
  text: {
    fontFamily: 'Monserrat',
    h1: {
      fontSize: '46px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '700',
    },
    h3: {
      fontSize: '20px',
      fontWeight: '700',
    },
    sub1: {
      fontSize: '32px',
      fontWeight: '400',
    },
    sub2: {
      fontSize: '24px',
      fontWeight: '400',
    },
    sub3: {
      fontSize: '18px',
      fontWeight: '400',
    },
    p: {
      fontSize: '14px',
      fontWeight: '400',
    },
    small: {
      fontSize: '12px',
      fontWeight: '400',
    },
  },
};

const LightTheme: DefaultTheme = {
  ...ThemeData,
  colors: {
    primary: 'blue',
    secondary: 'green',
    error: '#ff0000',
    background: '#ffffff',
    text: '#000000',
    subText: '#444444',
  },
};

const DarkTheme: DefaultTheme = {
  ...ThemeData,
  colors: {
    primary: '#00ff00',
    secondary: '#0000ff',
    error: '#ff0000',
    background: '#444444',
    text: '#dedede',
    subText: '#9a9a9a',
  },
};

export const Theme: React.FC = ({ children }) => {
  const [isDark, setDark] = useState(true);
  const swapTheme = () => setDark(!isDark);

  const theme = isDark
    ? { ...DarkTheme, swapTheme, isDark }
    : { ...LightTheme, swapTheme, isDark };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
