// @flow
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { WorkTitle, WorkImageWrapper, WorkContent, WorkWrapper } from './Work.style';

type Props = {
  title: string,
  imageUrl: string,
  path: string,
};

function Work(props: Props) {
  const { title, imageUrl, path, ...rest } = props;
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  const handleWaypointLeave = () => {
    setIsVisible(false);
  };

  return (
    <WorkWrapper to={path} {...rest}>
      <WorkContent isVisible={isVisible}>
        <WorkTitle>{title}</WorkTitle>
        <WorkImageWrapper>
          <img src={imageUrl} alt={title} />
        </WorkImageWrapper>
        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="20%" topOffset="-20%">
          <WorkTitle isStroke>{title}</WorkTitle>
        </Waypoint>
      </WorkContent>
    </WorkWrapper>
  );
}

Work.displayName = 'Work';
export default Work;
