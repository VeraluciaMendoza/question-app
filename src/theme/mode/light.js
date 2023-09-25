import { BASIC_COLOR, NEUTRAL_COLOR, RED_COLOR } from "../variables/colors";
import { FONT_FAMILIES } from "../variables/fontFamilies";

const THEME_LIGHT = {
  mode: 'light',
  colors: {
    primary: '',
    secondary: '',
    tertiary: '',

    info: '',
    warning: '',
    danger: RED_COLOR[600],
    success: '',

    white: '#FFFFFF',
    light: '',
    gray: '#737373',
    black: BASIC_COLOR.black,
    link: '#0000CD',
    body: BASIC_COLOR.white,
    text: NEUTRAL_COLOR[800],
    border: '',
  },
  fonts: {
    fontPrimary: FONT_FAMILIES.roboto,
    fontSecondary: '',
  },
  fontSizes: {
    body: '1rem',
  },
  shadows: {
    small: '4px 4px 12px 0px rgba(0, 0, 0, 0.08)',
    default: '4px 4px 12px 0px rgba(0, 0, 0, 0.12)'
  },
};

export default THEME_LIGHT;