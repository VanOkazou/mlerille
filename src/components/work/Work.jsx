// @flow
import React from 'react';
import { WorkTitle, WorkImageWrapper, WorkWrapper } from './Work.style';
import { Link } from 'react-scroll';

type Props = {
  title: string,
  imageUrl: string,
};

function Work(props: Props) {
  const { title, imageUrl, ...rest } = props;

  return (
    <WorkWrapper {...rest}>
      <WorkTitle>{title}</WorkTitle>
      <WorkImageWrapper>
        <img src={imageUrl} alt={title} />
      </WorkImageWrapper>
      <WorkTitle isStroke>{title}</WorkTitle>
    </WorkWrapper>
  );
}

Work.displayName = 'Work';
export default Work;
