// @flow
import { css } from 'styled-components';
import { BREAKPOINTS } from '../theme/breakpoints';

function getSizeFromBreakpoint(breakpointValue: string | number): number {
  let size;
  if (BREAKPOINTS[breakpointValue]) {
    size = BREAKPOINTS[breakpointValue];
  } else if (!Number.isNaN(breakpointValue)) {
    size = parseInt(breakpointValue, 10);
  } else {
    console.error('styled-media-query: No valid breakpoint or size specified for media.');
    size = 0;
  }
  return size;
}

// Use: Media queries
// ${is[LessThan/GreaterThan/Between/Outside](breakpoints)`
//   ...properties
// `};
function isLessThan(bp: string | number): Function {
  const maxWidth = getSizeFromBreakpoint(bp) - 1;

  return (...cssProperties: Array<Object>) => (
    cssProperties.length ? css`
      @media (max-width: ${maxWidth}px) {
        ${css(...cssProperties)}
      }
    ` : window.matchMedia(`(max-width: ${maxWidth}px)`).matches);
}
function isGreaterThan(bp: string | number): Function {
  const minWidth = getSizeFromBreakpoint(bp);

  return (...cssProperties: Array<Object>) => (
    cssProperties.length ? css`
      @media (min-width: ${minWidth}px) {
        ${css(...cssProperties)}
      }
    ` : window.matchMedia(`(min-width: ${minWidth}px)`).matches);
}

function isBetween(firstBreakpoint: string | number, secondBreakpoint: string | number): Function {
  const firstBreakpointValue = getSizeFromBreakpoint(firstBreakpoint);
  const secondBreakpointValue = getSizeFromBreakpoint(secondBreakpoint);

  const minWidth = Math.min(firstBreakpointValue, secondBreakpointValue);
  const maxWidth = Math.max(firstBreakpointValue, secondBreakpointValue) - 1;

  return (...cssProperties: Array<Object>) => (
    cssProperties.length ? css`
      @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
        ${css(...cssProperties)}
      }
    ` : window.matchMedia(`(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`).matches);
}

function isOutside(firstBreakpoint: string | number, secondBreakpoint: string | number): Function {
  const maxWidth = getSizeFromBreakpoint(firstBreakpoint) - 1;
  const minWidth = getSizeFromBreakpoint(secondBreakpoint);

  return (...cssProperties: Array<Object>) => (
    cssProperties.length ? css`
      @media (max-width: ${maxWidth}px), (min-width: ${minWidth}px) {
        ${css(...cssProperties)}
      }
    ` : window.matchMedia(`(max-width: ${maxWidth}px), (min-width: ${minWidth}px)`).matches);
}

export {
  isLessThan,
  isGreaterThan,
  isBetween,
  isOutside,
};
