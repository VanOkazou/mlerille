// @flow
import styled from 'styled-components';
import { compose, space, color, layout, flexbox, background, position } from 'styled-system';

const Div = styled.div`
  ${compose(space, color, layout, flexbox, background, position)}
`;

Div.displayName = 'Div'
export default Div;
