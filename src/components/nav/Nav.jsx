// @flow
import React from 'react';
import { NavWrapper } from './Nav.style';
import { Link } from 'react-scroll';

const NAV = [
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'home', label: 'Home' },
];

function Nav(props: Object) {
  return (
    <NavWrapper {...props}>
      {NAV.map(item => (
        <Link
          activeClass="active"
          to={item.id}
          key={item.id}
          spy={true}
          smooth={true}
          duration={500}
        >
          {item.label}
        </Link>
      ))}
    </NavWrapper>
  );
}

Nav.displayName = 'Nav';
export default Nav;
