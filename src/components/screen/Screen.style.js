// @flow
import styled from 'styled-components';
import { layout, color, compose } from 'styled-system';
import { isGreaterThan, isLessThan } from '../../utils/media';

export const ScreenContent = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) => console.log(theme)}

  ${isGreaterThan('sm')`
    padding: 90px 50px;
    max-width: 1000px;
  `}

  ${isLessThan('sm')`
    padding: 30px 50px;
  `}
`;
ScreenContent.displayName = 'ScreenContent';

export const ScreenWrapper = styled.section`
  ${compose(layout, color)};

  width: 100%;
`;
ScreenWrapper.displayName = 'ScreenWrapper';
