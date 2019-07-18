// @flow
import styled, { css } from 'styled-components';
import { color } from 'styled-system';
import { Link } from 'react-router-dom';

export const WorkTitle = styled.h2`
  ${color}

  width: 100%;
  font-family: impact;
  text-transform: uppercase;
  text-align: center;
  font-size: 8rem;
  line-height: 1.1;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  letter-spacing: 7px;
  transition: all 0.2s ease-in-out;

  ${({ isStroke }) =>
    isStroke
      ? css`
          -webkit-text-stroke: 1px #fff;
          z-index: 3;
          color: transparent;
        `
      : css`
          z-index: 1;
        `}
`;
WorkTitle.displayName = 'WorkTitle';

export const WorkImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 70%;
    transition: all 0.2s ease-in-out;
  }
`;
WorkImageWrapper.displayName = 'WorkImageWrapper';

export const WorkContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      ${WorkTitle} {
        top: -100px;
      }

      ${WorkImageWrapper} {
        img {
          opacity: 0;
        }
      }
    `}
`;
WorkContent.displayName = 'WorkContent';

export const WorkWrapper = styled(Link)`
  position: relative;
  color: inherit;
  display: block;
  padding: 150px 0;
  border: 1px solid black;
`;
WorkWrapper.displayName = 'WorkWrapper';
