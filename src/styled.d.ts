// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface TextTheme {
    fontSize: string;
    fontWeight: string;
  }
  export interface DefaultTheme {
    isDark?: boolean;
    borderRadius: string;
    padding: string;
    colors: {
      primary: string;
      secondary: string;
      error: string;
      background: string;
      text: string;
      subText: string;
    };
    text: {
      fontFamily: string;
      h1: TextTheme;
      h2: TextTheme;
      h3: TextTheme;
      sub1: TextTheme;
      sub2: TextTheme;
      sub3: TextTheme;
      p: TextTheme;
      small: TextTheme;
    };
    swapTheme?: function;
  }
}
