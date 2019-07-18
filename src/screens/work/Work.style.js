// @flow
import styled from 'styled-components';

export const WorkCover = styled.div`
  background: url(${({ coverUrl }) => coverUrl});
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const WorkDescription = styled.div`
  p {
    & + p {
      margin-top: 20px;
    }
  }
`;

export const WorkImageWrapper = styled.div`
  & + & {
    margin-top: 50px;
  }

  img {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const WorkImages = styled.div`
  ${WorkImageWrapper}:not(:nth-child(3n)) {
    img {
      max-width: 1100px;
    }
  }
`;
