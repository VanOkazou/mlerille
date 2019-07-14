// flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Element } from 'react-scroll';

import Reset from './reset';
import Nav from './components/nav';
import About from './screens/about';
import Home from './screens/home';
import Works from './screens/works';

import theme from './theme';

const NAV = [
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'home', label: 'Home' },
];

const COMPONENTS = {
  home: <Home />,
  about: <About />,
  works: <Works />,
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <Nav items={NAV} />

        {Object.keys(COMPONENTS).map(id => <Element name={id}>{COMPONENTS[id]}</Element>)}
      </>
    </ThemeProvider>
  );
}

export default App;
