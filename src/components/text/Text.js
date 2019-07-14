// @flow
import styled from 'styled-components';
import { color, compose, layout, space, typography } from 'styled-system';

const Text = styled.p`
  ${compose(color, layout, space, typography)}
`;

Text.displayName = 'Text'
export default Text;
