// @flow
import styled, { css } from 'styled-components';
import { layout, color } from 'styled-system';
import { isGreaterThan, isLessThan } from '../../utils/media';

export const WorkTitle = styled.h2`
  ${color}

  font-family: impact;
  text-transform: uppercase;
  font-size: 6rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  letter-spacing: 7px;

  ${({ isStroke }) => isStroke ? css`
    -webkit-text-stroke: 1px #000;
    z-index: 3;
    color: transparent;
  ` : css`
    z-index: 1;
  `}
`;
WorkTitle.displayName = 'WorkTitle';

export const WorkImageWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
WorkImageWrapper.displayName = 'WorkImageWrapper';

export const WorkWrapper = styled.div`
  position: relative;
  padding-right: 150px;
  padding-left: 150px;
`;
WorkWrapper.displayName = 'WorkWrapper';
