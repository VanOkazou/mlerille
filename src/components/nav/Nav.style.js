// @flow
import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  left: 15px;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: top left;

  & > a {
    color: ${({ theme }) => theme.colors.grey};
    &:hover {
      cursor: pointer;
    }

    & + a {
      margin-left: 15px;
    }
  }
`;
NavWrapper.displayName = 'NavWrapper'
