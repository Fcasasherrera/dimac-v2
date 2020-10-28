import {Dimensions} from 'react-native';
export const colors = {
  primary: '#1786E5', /* color principal */
  primaryLigth: '#434242', /* color secundario */
  primaryDark: '#2330d7',
  accent: '#00CC00',
  accentLight: '#c9f4c9',  /* color secundario -Seed */
  white: '#ffffff',
  whiteDark: '#ebe8e8',
  black: '#575555',
  blackLigth: '#c9c5c5',
  blackTransparent: 'rgba(0,0,0,0.8)',
  blackTransparentLight: 'rgba(0,0,0,0.3)',
  gray: '#969696',
  lightGray: '#eceff1',
  red: '#c44a57',
  error: 'rgba(221, 44, 0, 0.87)',
  pink: '#fce4ec'
};

export const borderRadius = (percentage: number) =>
  `${(Dimensions.get('window').width * percentage) / 100}px`;
