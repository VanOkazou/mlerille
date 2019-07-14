// @flow
import React from 'react';
import Screen from '../../components/screen';
import Work from '../../components/work';

function Home(props: Object) {
  const { ...rest } = props;

  return (
    <Screen minHeight="100vh" {...rest}>
      <Work title="L’espace Paris by Steelcase" imageUrl="https://i.ytimg.com/vi/ruy7UlWz0F0/maxresdefault.jpg" />
    </Screen>
  );
}

Home.displayName = 'Home';
export default Home;
