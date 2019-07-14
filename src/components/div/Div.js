// @flow
import styled from 'styled-components';
import { compose, space, color, layout, flexbox, background } from 'styled-system';

const Div = styled.div`
  ${compose(space, color, layout, flexbox, background)}
`;

Div.displayName = 'Div'
export default Div;
