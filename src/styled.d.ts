import 'styled-components';
import {myTheme} from './theme';

type ThemeInterface = typeof myTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {
    fontFamily: string;

    colors: {
      main: string;
      secondary: string;
      background: string;
      main_light: string;
      main_lighter: string;
      main_shade_one: string;
      main_shade_four: string;
      dark: string;
      light: string;
      gray: string;
      lightGreen: string;
    };
  }
}
