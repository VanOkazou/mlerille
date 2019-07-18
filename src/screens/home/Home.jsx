// flow
import React from 'react';
import { Element } from 'react-scroll';
import About from '../about';
import Presentation from '../presentation';
import Works from '../works';
import Nav from '../../components/nav';

const COMPONENTS = {
  home: <Presentation />,
  about: <About />,
  works: <Works />,
};

function Home() {
  return (
    <>
      <Nav />
      {Object.keys(COMPONENTS).map(id => <Element key={id} name={id}>{COMPONENTS[id]}</Element>)}
    </>
  );
}

export default Home;
