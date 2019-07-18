// @flow
import React from 'react';
import Screen from '../../components/screen';
import Text from '../../components/text';

type Props = {};

function Presentation(props: Props) {
  const { ...rest } = props;

  return (
    <Screen minHeight="100vh" {...rest}>
      <Text fontSize={{ _: '4rem', md: '8rem' }} lineHeight={1.4} fontWeight="bold">
        Hello ! I'm Mehdi Lerille a digital art director. Here’s a selection of various projects I
        had the pleasure to work on during these last years. I'm currently open to new challenges.
      </Text>
    </Screen>
  );
}

Presentation.displayName = 'Presentation';
export default Presentation;
