// @flow
import React, { type Node } from 'react';
import { ScreenContent, ScreenWrapper } from './Screen.style';

type Props = {
  children: Node,
};

function Screen(props: Props) {
  const { children, ...rest } = props;

  return (
    <ScreenWrapper {...rest}>
      <ScreenContent>
        {children}
      </ScreenContent>
    </ScreenWrapper>
  );
}

Screen.displayName = 'Screen';
export default Screen;
