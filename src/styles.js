import * as colors from '@material-ui/core/colors/index';

const {grey, red} = colors;


const maxWidth = 960;
const headerHeight = 64;
const headerHeightSmall = 56;
const borderRadius = 5;
const spacing = 10;
const boldWeight = 600;

const baseFontSize = 16;
const smallFontSize = baseFontSize - 2;
const mediumFontSize = baseFontSize + 2;
const largeFontSize = baseFontSize + 4;
const extraLargeFontSize = baseFontSize + 8;

const appBackgroundColor = '#eeeeee';
const lightGrey = grey[500]; // used for example for icon menu buttons
const darkGrey = grey[800];

const auditorColor = red[300];

const headerDefaultColor = darkGrey;

const whiteWithOpacity = 'rgba(255, 255, 255, 0.75)';
const whiteWithMuchOpacity = 'rgba(255, 255, 255, 0.25)';

const fonts = {
  workSans: {
    extraLight: "WorkSans-ExtraLight",
    light: "WorkSans-Light",
    regular: "WorkSans-Regular",
    bold: "WorkSans-Bold",
    extraBold: "WorkSans-ExtraBold"
  },
  monoton: {
    regular: "Monoton-Regular"
  }
};

export const theme = {
  /* MUI common settings */
  spacing: spacing, // use (a multiple of 1,2,...of) this for margins, spacings, paddings, ... to get visual rhythm
  palette: {
    type: 'light', // default
    primary: {
      light: '#6880a6',
      lightWithOpacity: 'rgba(104,128,166, 0.75)',
      main: '#3a5477',
      mainWithOpacity: 'rgba(58,84,119, 0.75)',
      mainWithLowOpacity: 'rgba(58,84,119, 0.5)',
      dark: '#082c4b'
    },
    secondary: {
      lighter: '#ffab42',
      main: '#ff7a00',
      mainWithOpacity: 'rgba(255,122,0, 0.75)',
      dark: '#c54b00'
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700]
    }
  },
  typography: {
    fontFamily: '"WorkSans-Regular", "Arial"',
    body1: {
      fontSize: mediumFontSize,
    },
    body2: {
      fontSize: baseFontSize,
      color: 'white'
    },
    button: {
      fontSize: baseFontSize,
      fontWeight: boldWeight,
      color: 'white'
    },
    title: {
      fontSize: largeFontSize,
      fontWeight: boldWeight
    },
    subheading: {
      fontSize: mediumFontSize,
      fontWeight: boldWeight,
      marginBottom: '4px'
    },
    placeholder: {
      fontSize: baseFontSize,
      color: darkGrey
    },
    subtitle1: {
      fontSize: largeFontSize,
      lineHeight: 1.4,
    },
  },

  /* Our own, non-MUI specific props*/
  borderRadius,
  baseFontSize,
  smallFontSize,
  mediumFontSize,
  extraLargeFontSize,
  maxWidth,
  headerHeight,
  headerHeightSmall,
  grey,
  lightGrey,
  darkGrey,
  whiteWithOpacity,
  whiteWithMuchOpacity,
  appBackgroundColor,
  auditorColor,
  headerDefaultColor,
  boldWeight,
  fonts
};
