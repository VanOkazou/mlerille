// @flow
import styled from 'styled-components';
import { layout, color, space, compose } from 'styled-system';
import { isGreaterThan } from '../../utils/media';

export const ScreenContent = styled.div`
  ${space}

  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;

  ${isGreaterThan('sm')`
    max-width: 80%;
  `}
`;
ScreenContent.displayName = 'ScreenContent';
ScreenContent.defaultProps = {
  paddingY: { _: '30px', sm: '90px' },
  paddingX: '50px'
};

export const ScreenWrapper = styled.section`
  ${compose(layout, color)};

  width: 100%;
`;
ScreenWrapper.displayName = 'ScreenWrapper';
