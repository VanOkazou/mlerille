// @flow
import { BREAKPOINTS } from './breakpoints';

export default {
  breakpoints: Object.keys(BREAKPOINTS).reduce((acc, key) => ({ ...acc, [key]: `${BREAKPOINTS[key]}px` }), {}),
  colors: {
    text: '#222',
    grey: '#666',
  },
};
