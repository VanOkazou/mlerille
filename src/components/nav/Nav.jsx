// @flow
import React from 'react';
import { NavWrapper } from './Nav.style';
import { Link } from 'react-scroll';

type Props = {
  items: Array<Object>,
};

function Nav(props: Props) {
  const { items, ...rest } = props;

  return (
    <NavWrapper {...rest}>
      {items.map(item => (
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
