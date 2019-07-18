// @flow
import React, { type Node } from 'react';
import { ScreenContent, ScreenWrapper } from './Screen.style';

type Props = {
  children: Node,
  paddingX?: string,
  paddingY?: string,
};

function Screen(props: Props) {
  const { children, paddingX, paddingY, ...rest } = props;

  return (
    <ScreenWrapper {...rest}>
      <ScreenContent paddingX={paddingX} paddingY={paddingY}>
        {children}
      </ScreenContent>
    </ScreenWrapper>
  );
}

Screen.defaultProps = {
  paddingX: undefined,
  paddingY: undefined,
}

Screen.displayName = 'Screen';
export default Screen;
