// @flow
import styled, { css } from 'styled-components';
import { color, compose, layout, space, typography } from 'styled-system';

const Text = styled.p`
  ${compose(color, layout, space, typography)}

  ${({ textTransform }) => textTransform && css`
    text-transform: ${textTransform};
  `}
`;

Text.displayName = 'Text'
export default Text;
